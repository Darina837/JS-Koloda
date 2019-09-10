function func() {
  console.log(arguments, arguments.callee.name)
}
func(10, false, "google")