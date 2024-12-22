function fibonacci(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;

    const fibonacciBilangan = [0,1];
    for(let i=2; i <= n; i++){
        fibonacciBilangan.push(fibonacciBilangan[i-1] + fibonacciBilangan[i-2]);    
    }

    return fibonacciBilangan;
}

// Jangan hapus kode di bawah ini!
export default fibonacci;