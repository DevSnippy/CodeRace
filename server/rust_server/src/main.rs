use actix_cors::Cors;
use actix_web::{get, App, HttpResponse, HttpServer, Responder};
use std::fs::File;
use std::io::Read;

mod quicksort_module;
use quicksort_module::quicksort_module_algo;

















mod ExempleArr;

#[get("/rustJson/10mb")]
async fn rust_json() -> impl Responder {
    let mut file = File::open("D:\\code\\multi-benchmark_site\\server\\jsons\\10mb.json").unwrap();
    let mut contents = String::new();
    file.read_to_string(&mut contents).unwrap();

    HttpResponse::Ok().body(contents)
}

#[get("/quicksort/sorted/500")]
async fn quicksort() -> impl Responder {
    let mut my_array = ExempleArr::ARR_OF_500K.to_vec();
    quicksort_module_algo::quick_sort(&mut my_array);

    HttpResponse::Ok().json(my_array)
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| {
        let cors = Cors::default().allowed_origin("http://localhost:3000");

        App::new().wrap(cors).service(rust_json).service(quicksort)
    })
    .bind("127.0.0.1:3003")?
    .run()
    .await
}
