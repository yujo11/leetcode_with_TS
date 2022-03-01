function average(salary: number[]): number {
  return (salary.reduce((acc, curr) => acc + curr) - Math.max(...salary) - Math.min(...salary)) / (salary.length - 2)
}
