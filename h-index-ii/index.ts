export default function hIndex(citations: number[]): number {
    const n = citations.length;
    let left = 0,
        right = n - 1;
    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);
        if (citations[mid] >= n - mid) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return n - left;
}
