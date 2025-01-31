// // // // interface User {
// // // //     readonly id: number,
// // // //     name: string,
// // // //     hasMoney ?: boolean,
// // // //     printDetails:(data:funcData)=>string
// // // // }
// // // // type funcData = {name:string,hasMoney:boolean}
// // // // const UserName: User = {
// // // //     id: 1,
// // // //     name: "Karan",
// // // //     hasMoney:true, //This is an optional property but its your choice if you want to use it.
// // // //     printDetails:(data:funcData)=>`${data?.name} & ${data.hasMoney ? "Ameer Hai" : "Bikhari"}`
// // // // }

// // // // // UserName.id = 4 ; //Error Cause Id is readonly , so it's constant
// // // // const str:string = UserName?.printDetails({name:"Karan",hasMoney:true})
// // // // console.log(str);

// // // // 30 January 2025
// // // // 1. Basic Type Annotations
// // // // You are building a weather app. Define a type for the weather data that includes:

// // // // temperature (number)
// // // // humidity (number)
// // // // condition (string, e.g., "Sunny", "Rainy", "Cloudy")
// // // // Your company is building a user authentication system. Define a type for a user that includes:

// // // // id (number)
// // // // username (string)
// // // // isAdmin (boolean)

// // // // Weather App
// // // type weatherData = {
// // //     temperature: number,
// // //     condition: string,
// // //     humidity: number
// // // }

// // // // Authentication system
// // // type authSystem = {
// // //     id: number,
// // //     username: string,
// // //     isAdmin: boolean
// // // }

// // // // 2. Unions & Type Aliases
// // // // A payment system needs to support both credit cards and UPI payments. Define a union type that includes properties:

// // // // mode: "credit_card" or "upi"
// // // // transactionId: string
// // // // amount: number
// // // // Your e-commerce platform supports multiple order statuses ("Pending", "Shipped", "Delivered", "Cancelled"). Define a type alias for it.

// // // type paymentType = {
// // //     mode: "credit_card" | "upi",
// // //     transactionId: string,
// // //     amount: number,
// // // }

// // // type ecommerceType = {
// // //     order_status: "Pending" | "Shipped" | "Delivered" | "Cancelled"
// // // }

// // // //3. Interfaces & Optional Properties
// // // // Define an interface for a blog post with:

// // // // title (string)
// // // // content (string)
// // // // author (string)
// // // // publishedDate (optional, Date)
// // // // Your company is building an inventory system. Create an interface for a product that includes:

// // // // id (number)
// // // // name (string)
// // // // price (number)
// // // // category (string)
// // // // stockQuantity (optional, number)

// // // interface blogPost {
// // //     title: string;
// // //     content: string;
// // //     author: string;
// // //     published?: Date;
// // // }

// // // interface inventorySystem {
// // //     id: number;
// // //     name: string;
// // //     price: number;
// // //     category: string;
// // //     stockQuantity?: number
// // // }

// // // // 4. Readonly & Extending Interfaces
// // // // You are developing a student record system where student data should not be modified once created. Define a Student interface and make all properties readonly.

// // // interface studentInterface {
// // //     readonly student_name: string;
// // //     readonly student_class: number;
// // //     readonly student_rollno: number;
// // //     readonly student_age: number;
// // //     readonly student_gender: number;
// // // }

// // // // Your HR system stores employee data. Define a base interface EmployeeBase with common properties like id, name, and email. Then, extend it to create FullTimeEmployee and PartTimeEmployee interfaces with additional properties (salary for full-time, hourlyRate for part-time).

// // // interface EmployeeBase {
// // //     readonly id: number;
// // //     name: string;
// // //     email: string;
// // // }

// // // interface FullTimeEmployee extends EmployeeBase {
// // //     salaryFullTime: number;
// // // }

// // // interface PartTimeEmployee extends EmployeeBase {
// // //     salaryPartTime: number
// // // }

// // // //5. Real-World Use Cases for TypeScript Types & Interfaces
// // // // Your ride-sharing app has different types of users: Riders and Drivers. Define an interface for each, ensuring that:

// // // // Riders have a paymentMethod (string)
// // // // Drivers have a licenseNumber (string)
// // // // Both share common properties like id, name, and phoneNumber

// // // interface User {
// // //     readonly id: number;
// // //     name: string;
// // //     phoneNumber: string;
// // // }
// // // interface Riders extends User {
// // //     paymentMethod: "Upi" | "Cash"
// // // }

// // // interface Drivers extends User {
// // //     licenseNumber: string;
// // // }
// // // // You are developing a food delivery app that supports multiple types of restaurants:
// // // // Some restaurants only do dine-in, while others support delivery
// // // // Define a union type or an interface that can handle both cases

// // // interface restaurantType {
// // //     readonly restaurantId: number;
// // //     restaurantName: string;
// // //     ownerName: string;
// // //     restaurantType: "dine-in" | "dine-in & delivery";
// // //     restaurantLocation: "string";
// // //     isVeg: boolean;
// // //     cuisines: string[];
// // //     email: string;
// // //     photos: string[];
// // //     contactNumber: number;
// // //     paymentMethod: "upi" | "cash" | "credit card" | "Ghar ke kagaz" | "Aaj nakad kal udhar"
// // // }

// // // 1️⃣ Problem: Partial Updates in User Profiles
// // // You are building a system where users can update their profiles. Some fields are optional, so you should allow partial updates.

// // // Define a UserProfile type with properties: name (string), email (string), age (number).
// // // Create a function updateProfile that accepts a UserProfile and an object of partial updates using Partial.

// // type User = {
// //     name: string,
// //     email: string,
// //     age: number
// // }

// // const partialUpdateObj: Partial<User> = { name: "karan", email: "test@test.com", age: 23 }

// // const updateProfile = (UserProfileData: User, updatedProfileData: User) => {
// //     return { ...UserProfileData, ...updatedProfileData }
// // }

// // // Problem: Immutable Product Data
// // // You are creating a product catalog, and once a product is added, it should not be modified.

// // // Define a Product type with id (number), name (string), price (number).
// // // Use Readonly to make the product data immutable.
// // // Create a product object and try to modify one of its properties. It should throw an error.

// // type productCatalog = {
// //     id: number,
// //     name: string,
// //     price: number
// // }

// // const newProduct: Readonly<productCatalog> = { id: 1, name: 'Iphone 16 Pro Max', price: 150000 };
// // // newProduct.name = "Iphone 16"; //Error because Type of newProduct is ReadOnly

// // // Problem: All Properties Required
// // // You are developing an e-commerce website and want to enforce that every product has all properties (no optional fields).

// // // Define a Product type with name, price, description, and category.
// // // Use Required<Product> to ensure all fields are required for the product.
// // // Create a product and try to omit a field (e.g., description). It should throw an error.

// // type productType = {
// //     name: string,
// //     price: number,
// //     description: string,
// //     category: string
// // }

// // // const newProduct: Required<productType> = {name:"Iphone 16",price:150000,description:"Iphone is expensive"} //Here it will throw an error because I have'nt provided the category field but due to 'Required' , all fields are necessary

// // // 4️⃣ Problem: Updating User Info with Required Fields
// // // You want to update user information, but some fields are mandatory and others are optional. Use Required for mandatory fields and Partial for optional fields.

// // // Define a User type with id (number), name (string), email (optional), and age (optional).
// // // Create a function updateUser that accepts an object with id and name as required fields, and email and age as optional fields using Partial.

// type User = {
//   readonly id: number;
//   readonly name: string;
//   email?: string;
//   age?: number;
//   gender?: string;
// };

// const constantUserFields: User = {
//   id: 1,
//   name: "Karan",
// };

// const optionalUserFields: Partial<User> = {
//   email: "test@test.com",
//   age: 23,
// };

// const updateProfile = (constantFields: User, optionalFields: Partial<User>) => {
//   return { ...constantUserFields, ...optionalUserFields };
// };

// 5️⃣ Problem: Role Management with Permissions
// You are creating a role management system. Each role has a set of permissions that should be editable, but the role name should remain unchanged.

// Define a Role type with name (string) and permissions (array of strings).
// Use Readonly to make the Role name immutable.
// Use Partial to allow modifying only the permissions.

// type RoleSystemType = {
//   readonly name: string;
//   permissions: string[];
// };

// const rolePermissions: Partial<RoleSystemType> = {
//   permissions: ["Mobile", "Location"],
// };

// 6️⃣ Problem: Readonly Object with Update Function
// You have an immutable object, but you want to implement a function that can update certain fields using Partial.

// Define an Employee type with id, name, position, and salary.
// Create a readonlyEmployee object.
// Write a function updateSalary that can update the salary field using Partial, but leaves other properties unchanged.

// type employeeType = {
//   readonly id: number;
//   readonly name: string;
//   readonly position: string;
//   readonly salary: number;
// };

// // Immutable employee object
// const readonlyEmployee: employeeType = {
//   id: 1,
//   name: "John Doe",
//   position: "Software Engineer",
//   salary: 40000,
// };

// // Function to update salary (only salary can be updated)
// const updateSalary = (
//   employee: employeeType,
//   data: Partial<employeeType> // Allow partial update of employee
// ) => {
//   return { ...employee, ...data }; // Merging existing employee data with new updates
// };

// // Example usage
// const updatedEmployee = updateSalary(readonlyEmployee, { salary: 45000 });
// console.log(updatedEmployee);

// 7️⃣ Problem: Dynamic Form Field Updates
// You are building a form where some fields are required, and others are optional.

// Define a FormData type with username, password, and email.
// Use Required to enforce that username and password are mandatory fields.
// Use Partial to allow email to be optional.

// type formDataObj = { username: string; password: string; email?: string };

// const requiredFields: formDataObj = {
//   username: "Karan Sapra",
//   password: "1123#343q324",
// };

// const updateProfile = (
//   formData: formDataObj,
//   updateObj: Partial<formDataObj>
// ) => {
//   return { ...formData, ...updateObj };
// };

// updateProfile(requiredFields, { email: "test@test.com" });

// Basic Understanding of Enums
// Define an enum called Weekdays that represents the days of the week. Assign Monday as 0, Tuesday as 1, and so on.

// What will be the value of Weekdays.Monday?
// Create a string enum called Response with values Yes, No, and Maybe.

// What is the value of Response.Yes?
// Write an enum called TrafficLight with values Red, Yellow, and Green.

// What would be the numeric value of TrafficLight.Green if Red = 0 and Yellow = 1?
// Create a function getDayName that takes an enum value from the Weekdays enum and returns the name of the day in string format.

// // Question 1
// enum Weekdays {
//   Monday = 0,
//   Tuesday = 1,
//   wednesday = 2,
//   Thursday = 3,
//   Friday = 4,
//   Saturday = 5,
//   Sunday = 6,
// }

// console.log(Weekdays.Monday) //0

// Question 2

// enum ResponseEnum {
//   Yes,
//   No,
//   Maybe,
// }
// console.log(ResponseEnum.Yes) //0

// Question 3
enum TrafficLight {
  Red,
  yellow,
  green,
}

console.log(TrafficLight.green)//2
