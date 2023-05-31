let row = document.getElementById('taffle');

let cars = [
   {
    id: '1',
    Name: 'Audi Rs3 Sedan',
    Price: 'R300 000',
    Image: 'https://i.postimg.cc/KjfVKqby/dsc-0926-1669912729.jpg'
   },
   {
    id:'2',
    Name: 'Audio RS3 Hatchback',
    Price: 'R4 000 000',
    Image: 'https://i.postimg.cc/DzN0bhF7/9a11847d62e2de43c75777a29903c927.jpg '
   },
   {
    id: '3',
    Name: 'G63 Amg',
    Price: 'R6 999 000',
    Image: 'https://i.postimg.cc/R0b5T1PB/7-K1-A5572-scaled.jpg'
   },
   {
    id: '4',
    Name: 'G63 Amg Black',
    Price: 'R6 999 000',
    Image: 'https://i.postimg.cc/fb6ZNjYv/Crop800x600.jpg'
   }

];


cars.forEach(car => {
    row.innerHTML += `
    <tr>
    <th>${car.Name}</th>
    <th>${car.Price}</th>
    <th><img src="${car.Image}"alt="${car.id}"></th>
    </tr>

    <th>
    <button>ADD</button>
    </th>

    <th>
    <button>DELETE.</button>
    </th>
    </tr>
    `
});