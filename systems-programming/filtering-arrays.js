const people = [
  { personal: 'Jean', family: 'Jennings' },
  { personal: 'Marlyn', family: 'Wescoff' },
  { personal: 'Ruth', family: 'Lichterman' },
  { personal: 'Betty', family: 'Snyder' },
  { personal: 'Frances', family: 'Bilas' },
  { personal: 'Kay', family: 'McNulty' }
]

const result = people.filter(p => p.family <= 'M')

console.log(result)
