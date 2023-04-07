pub mod quicksort_module_algo {
    use std::cmp::Ordering;

    pub fn quick_sort(arr: &mut [i32]) {
        let mut stack = vec![(0, arr.len() - 1)];

        while let Some((start, end)) = stack.pop() {
            if start >= end {
                continue;
            }

            let pivot = partition(arr, start, end);
            stack.push((start, pivot - 1));
            stack.push((pivot + 1, end));
        }
    }

    fn partition(arr: &mut [i32], start: usize, end: usize) -> usize {
        let pivot = arr[end];
        let mut i = start;

        for j in start..end {
            if arr[j] <= pivot {
                arr.swap(i, j);
                i += 1;
            }
        }

        arr.swap(i, end);
        i
    }
}
