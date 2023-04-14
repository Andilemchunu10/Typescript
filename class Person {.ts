class Person {

    
     constructor(private name: string, private age:number, private qualification:string) 
     {

     }
  
    public getName(): string {
      return this.name;
    }
    public getAge(): number {
        return this.age;
    }
    public getQualification():string{
        return this.qualification;
    }
  }
  
  const person = new Person("Nyiko Lico");
  const Age = new Person(9)
  console.log(person.getName());