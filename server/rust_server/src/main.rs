#[macro_use]
extern crate rocket;

mod quicksort_module;
use quicksort_module::quicksort_module_algo;

mod ExempleArr;

use rocket::http::Status;
use rocket::response::content::RawJson;
use rocket::serde::json::Json;
use rocket_cors::{AllowedHeaders, AllowedOrigins, CorsOptions};

use std::path::PathBuf;
use relative_path::RelativePath;

#[get("/rustJson/10mb")]
async fn rust_json() -> Result<RawJson<String>, Status> {
    // Get the path of the current executable
    let exe_path = std::env::current_exe().map_err(|err| {
        eprintln!("Error getting current exe path: {:?}", err);
        Status::InternalServerError
    })?;

    // Get the directory where the executable lives
    let exe_dir = exe_path.parent().ok_or_else(|| {
        eprintln!("Could not get exe directory");
        Status::InternalServerError
    })?;

    // Build the relative path to your file. Adjust as needed.
    let relative_path = RelativePath::new("./10mb.json");

    // Convert the relative path to a logical path (handles '..' correctly)
    let full_path: PathBuf = relative_path.to_logical_path(exe_dir);

    match rocket::tokio::fs::read_to_string(&full_path).await {
        Ok(contents) => Ok(RawJson(contents)),
        Err(err) => {
            eprintln!("Error reading file {:?}: {:?}", full_path, err);
            Err(Status::InternalServerError)
        }
    }
}

#[get("/quicksort/sorted/500")]
fn quicksort() -> Json<Vec<i32>> {
    let mut my_array = ExempleArr::ARR_OF_500K.to_vec();
    quicksort_module_algo::quick_sort(&mut my_array);
    Json(my_array)
}

#[launch]
fn rocket() -> _ {
    // Configure allowed origins (adjust as needed for your deployment).
    let allowed_origins = AllowedOrigins::some_exact(&["http://localhost:3000"]);

    // Build the CORS options.
    let cors = CorsOptions {
        allowed_origins,
        allowed_headers: AllowedHeaders::all(),
        // You can adjust other options such as allowed methods, credentials, etc.
        ..Default::default()
    }
    .to_cors()
    .expect("Error creating CORS fairing");

    rocket::build()
        .attach(cors)
        .mount("/", routes![rust_json, quicksort])
}
