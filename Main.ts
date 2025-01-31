// // // interface User {
// // //     readonly id: number,
// // //     name: string,
// // //     hasMoney ?: boolean,
// // //     printDetails:(data:funcData)=>string
// // // }
// // // type funcData = {name:string,hasMoney:boolean}
// // // const UserName: User = {
// // //     id: 1,
// // //     name: "Karan",
// // //     hasMoney:true, //This is an optional property but its your choice if you want to use it.
// // //     printDetails:(data:funcData)=>`${data?.name} & ${data.hasMoney ? "Ameer Hai" : "Bikhari"}`
// // // }

// // // // UserName.id = 4 ; //Error Cause Id is readonly , so it's constant
// // // const str:string = UserName?.printDetails({name:"Karan",hasMoney:true})
// // // console.log(str);

// // // 30 January 2025
// // // 1. Basic Type Annotations
// // // You are building a weather app. Define a type for the weather data that includes:

// // // temperature (number)
// // // humidity (number)
// // // condition (string, e.g., "Sunny", "Rainy", "Cloudy")
// // // Your company is building a user authentication system. Define a type for a user that includes:

// // // id (number)
// // // username (string)
// // // isAdmin (boolean)

// // // Weather App
// // type weatherData = {
// //     temperature: number,
// //     condition: string,
// //     humidity: number
// // }

// // // Authentication system
// // type authSystem = {
// //     id: number,
// //     username: string,
// //     isAdmin: boolean
// // }

// // // 2. Unions & Type Aliases
// // // A payment system needs to support both credit cards and UPI payments. Define a union type that includes properties:

// // // mode: "credit_card" or "upi"
// // // transactionId: string
// // // amount: number
// // // Your e-commerce platform supports multiple order statuses ("Pending", "Shipped", "Delivered", "Cancelled"). Define a type alias for it.

// // type paymentType = {
// //     mode: "credit_card" | "upi",
// //     transactionId: string,
// //     amount: number,
// // }

// // type ecommerceType = {
// //     order_status: "Pending" | "Shipped" | "Delivered" | "Cancelled"
// // }

// // //3. Interfaces & Optional Properties
// // // Define an interface for a blog post with:

// // // title (string)
// // // content (string)
// // // author (string)
// // // publishedDate (optional, Date)
// // // Your company is building an inventory system. Create an interface for a product that includes:

// // // id (number)
// // // name (string)
// // // price (number)
// // // category (string)
// // // stockQuantity (optional, number)

// // interface blogPost {
// //     title: string;
// //     content: string;
// //     author: string;
// //     published?: Date;
// // }

// // interface inventorySystem {
// //     id: number;
// //     name: string;
// //     price: number;
// //     category: string;
// //     stockQuantity?: number
// // }

// // // 4. Readonly & Extending Interfaces
// // // You are developing a student record system where student data should not be modified once created. Define a Student interface and make all properties readonly.

// // interface studentInterface {
// //     readonly student_name: string;
// //     readonly student_class: number;
// //     readonly student_rollno: number;
// //     readonly student_age: number;
// //     readonly student_gender: number;
// // }

// // // Your HR system stores employee data. Define a base interface EmployeeBase with common properties like id, name, and email. Then, extend it to create FullTimeEmployee and PartTimeEmployee interfaces with additional properties (salary for full-time, hourlyRate for part-time).

// // interface EmployeeBase {
// //     readonly id: number;
// //     name: string;
// //     email: string;
// // }

// // interface FullTimeEmployee extends EmployeeBase {
// //     salaryFullTime: number;
// // }

// // interface PartTimeEmployee extends EmployeeBase {
// //     salaryPartTime: number
// // }

// // //5. Real-World Use Cases for TypeScript Types & Interfaces
// // // Your ride-sharing app has different types of users: Riders and Drivers. Define an interface for each, ensuring that:

// // // Riders have a paymentMethod (string)
// // // Drivers have a licenseNumber (string)
// // // Both share common properties like id, name, and phoneNumber

// // interface User {
// //     readonly id: number;
// //     name: string;
// //     phoneNumber: string;
// // }
// // interface Riders extends User {
// //     paymentMethod: "Upi" | "Cash"
// // }

// // interface Drivers extends User {
// //     licenseNumber: string;
// // }
// // // You are developing a food delivery app that supports multiple types of restaurants:
// // // Some restaurants only do dine-in, while others support delivery
// // // Define a union type or an interface that can handle both cases

// // interface restaurantType {
// //     readonly restaurantId: number;
// //     restaurantName: string;
// //     ownerName: string;
// //     restaurantType: "dine-in" | "dine-in & delivery";
// //     restaurantLocation: "string";
// //     isVeg: boolean;
// //     cuisines: string[];
// //     email: string;
// //     photos: string[];
// //     contactNumber: number;
// //     paymentMethod: "upi" | "cash" | "credit card" | "Ghar ke kagaz" | "Aaj nakad kal udhar"
// // }

// // 1️⃣ Problem: Partial Updates in User Profiles
// // You are building a system where users can update their profiles. Some fields are optional, so you should allow partial updates.

// // Define a UserProfile type with properties: name (string), email (string), age (number).
// // Create a function updateProfile that accepts a UserProfile and an object of partial updates using Partial.

// type User = {
//     name: string,
//     email: string,
//     age: number
// }

// const partialUpdateObj: Partial<User> = { name: "karan", email: "test@test.com", age: 23 }

// const updateProfile = (UserProfileData: User, updatedProfileData: User) => {
//     return { ...UserProfileData, ...updatedProfileData }
// }

// // Problem: Immutable Product Data
// // You are creating a product catalog, and once a product is added, it should not be modified.

// // Define a Product type with id (number), name (string), price (number).
// // Use Readonly to make the product data immutable.
// // Create a product object and try to modify one of its properties. It should throw an error.

// type productCatalog = {
//     id: number,
//     name: string,
//     price: number
// }

// const newProduct: Readonly<productCatalog> = { id: 1, name: 'Iphone 16 Pro Max', price: 150000 };
// // newProduct.name = "Iphone 16"; //Error because Type of newProduct is ReadOnly

// // Problem: All Properties Required
// // You are developing an e-commerce website and want to enforce that every product has all properties (no optional fields).

// // Define a Product type with name, price, description, and category.
// // Use Required<Product> to ensure all fields are required for the product.
// // Create a product and try to omit a field (e.g., description). It should throw an error.

// type productType = {
//     name: string,
//     price: number,
//     description: string,
//     category: string
// }

// // const newProduct: Required<productType> = {name:"Iphone 16",price:150000,description:"Iphone is expensive"} //Here it will throw an error because I have'nt provided the category field but due to 'Required' , all fields are necessary

// // 4️⃣ Problem: Updating User Info with Required Fields
// // You want to update user information, but some fields are mandatory and others are optional. Use Required for mandatory fields and Partial for optional fields.

// // Define a User type with id (number), name (string), email (optional), and age (optional).
// // Create a function updateUser that accepts an object with id and name as required fields, and email and age as optional fields using Partial.

type User = {
  readonly id: number;
  readonly name: string;
  email?: string;
  age?: number;
  gender?: string;
};

const constantUserFields: User = {
  id: 1,
  name: "Karan",
};

const optionalUserFields: Partial<User> = {
  email: "test@test.com",
  age: 23,
};

const updateProfile = (constantFields: User, optionalFields: Partial<User>) => {
  return { ...constantUserFields, ...optionalUserFields };
};

//   Awesome
