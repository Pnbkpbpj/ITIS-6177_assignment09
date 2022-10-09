function main(args) {
  let name = args.keyword || 'stranger'
  let greeting = name + ' says hello'
  console.log(greeting)
  return {"body": greeting}
}
