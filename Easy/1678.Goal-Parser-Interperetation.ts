function interpret(command: string): string {
  const result = []

  for (let i = 0; i < command.length; i++) {
    if (command[i] === 'G') {
      result.push('G')
    }

    if (command[i] === '(') {
      if (command[i + 1] === ')') {
        result.push('o')
        i++
      } else {
        result.push('al')
        i += 3
      }
    }
  }

  return result.join('')
}
