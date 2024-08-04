
// 1: in ra các số chẵn trong mảng
// 2: Tìm số lớn nhất trong mảng

// var a = [2,7,6,5,3,4];

// for(let i=0;i<a.length;i++)
// {
//     if(a[i]%2===0)
//     {
//         console.log(a[i]);
//     }
// }

// var mx=0;
// for(let i=0;i<a.length;i++)
// {
//     if(a[i]>mx)
//     {
//         mx=a[i];
//     }
// }
// console.log(mx);

// var student = {
//     name: "Kiệt",
//     age: 18,
//     address: "Bình Dương",
//     dob: "24/03",
//     gender: "n"
// }

// for (const key in student) {
//     console.log(student[key]);
// }
 //Tìm học sinh trên 18 tuổi
var listStudent = [
    {
        name: "Trường",
        age: 20,
        address: "Bình Phước"
    },
    {
        name: "Trâm",
        age: 17,
        address: "Long An"
    },
    {
        name: "Trung",
        age: 19,
        address: "Bình Phước"
    },
    {
        name: "Trí",
        age: 16,
        address: "ĐỒng Tháp"
    },
    {
        name: "Khang",
        age: 18,
        address: "Bình Dương"
    },
]
var   tam = 0;
var sum=0;
//Tính tổng số tuổi của tất cả học sinh
//In ra học sinh có tuổi cao nhất
for (var student of listStudent) {
    sum=sum+student.age;
    if (tam < student.age) {
        tam = student;
    }
}
console.log(sum);
console.log(tam);
