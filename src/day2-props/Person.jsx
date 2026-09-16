
//Direct Object Access

// export default function Person(props) {
//     return(
//         <div>
//             <h2>Name : {props.name}</h2>
//             <p>Email : {props.email}</p>
//             <p>Village : {props.address.vill}, Post Offiece : {props.address.po},
//                 District : {props.address.dist}, Pin : {props.address.pin}</p>
//         </div>
//     );
// }


//Parameter Destructuring

// export default function Person({name,email,address}) {
//     return(
//         <div>
//             <h2>Name : {name}</h2>
//             <p>Email : {email}</p>
//             <p>Village : {address.vill}, Post Offiece : {address.po},
//                 District : {address.dist}, Pin : {address.pin}</p>
//         </div>
//     );
// }

//Nested Parameter Destructuring

export default function Person({name,email,address:{vill,po,dist,pin}}) {
    return(
        <div>
            <h2>Name : {name}</h2>
            <p>Email : {email}</p>
            <p>Village : {vill}, Post Offiece : {po},
                District : {dist}, Pin : {pin}</p>
        </div>
    );
}