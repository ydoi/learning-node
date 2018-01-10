process.stdin.setEncoding('utf8');

process.stdin.on('readable', () => {
    let input = process.stdin.read();

    if (input != null) {
        process.stdout.write(input);

        let command = input.trim();
        if (command == 'exit') {
            process.exit();
        }
    }
})