var birthday = new Date('2001-10-11');
var today = new Date();
var age = today.getFullYear() - birthday.getFullYear();
if (
    today.getMonth() < birthday.getMonth() ||
    (today.getMonth() === birthday.getMonth() && today.getDate() < birthday.getDate())
) {
    age--;
}
document.getElementById('age').innerText = age;