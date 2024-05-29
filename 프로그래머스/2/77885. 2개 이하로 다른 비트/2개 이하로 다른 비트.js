function solution(numbers) {
    return numbers.map((n, i) => {
        const binary = n.toString(2).split('');
        const lastZeroIndex = binary.lastIndexOf('0');

        if (lastZeroIndex === -1) {
            // 111 => 1011
            binary.splice(1, 0, '0');
        } else {
            const lastIndex = binary.length - 1;
            if (lastIndex === lastZeroIndex) {
                // 100 => 101
                binary[lastZeroIndex] = '1';
            } else {
                // 101 => 110
                [
                    binary[lastZeroIndex],
                    binary[lastZeroIndex + 1]
                ] = [
                    binary[lastZeroIndex + 1],
                    binary[lastZeroIndex]
                ]
            }
        }

        return parseInt(binary.join(''), 2);
    });
}