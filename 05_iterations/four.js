const myObject ={
    js:'JavaScript',
    cpp :'C++',
    py:'Python',
    rb:'Ruby',
    swift:"Swift"
}
for (const key in myObject){
    console.log(`${key} shortcut is for ${myObject[key]}`);
  
}

const programmingLanguages = ['JavaScript', 'C++', 'Python', 'Ruby', 'Swift'];
for(const key in programmingLanguages){
    console.log(programmingLanguages[key]);
    
}