data = [
    { id: 1, name: "mughira", task: "did react", date: "12,6,2022" },
    { id: 2, name: "ramaz", task: "did nextjs", date: "15,6,2022" },
    { id: 3, name: "hamza", task: "did larawell", date: "13,6,2022" },
    { id: 4, name: "umer", task: "did node", date: "14,6,2022" },
    { id: 5, name: "ahsan", task: "did html", date: "13,6,2022" },
    { id: 6, name: "ahmed", task: "did css", date: "13,6,2022" },
  ];

  result = data.reduce(function (r, a) {
    r[a.date] = r[a.date] || [];
    r[a.date].push(a);
    return r;
}, Object.create(null));

console.log(result);
  