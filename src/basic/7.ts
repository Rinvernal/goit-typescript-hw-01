type pages = {
  title: string,
  likes: number,
  accounts: string[],
  status: "open" | "close",
  details?: datails
}
type datails = {
  createAt: Date,
  updateAt: Date
}

const page1 : pages = {
  title: 'The awesome page',
  likes: 100,
  accounts: ['Max', 'Anton', 'Nikita'],
  status: 'open',
  details: {
    createAt: new Date('2021-01-01'),
    updateAt: new Date('2021-05-01'),
  }
}

const page2 : pages = {
  title: 'Python or Js',
  likes: 5,
  accounts: ['Alex'],
  status: 'close',
}