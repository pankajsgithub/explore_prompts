// Path => http://localhost:3000/api/users

export async function GET() {
    // Handle GET Request for /api/users
    // Retrieve users from the database or any data source

    const users = [
        {id:1, name:'Person 1'},
        {id:2, name:'Person 2'},
        {id:3, name:'Person 3'},
        {id:4, name:'Person 4'},
        {id:5, name:'Person 5'},
        {id:6, name:'Person 6'},
        {id:7, name:'Person 7'},
        {id:8, name:'Person 8'},
    ]

    // send the users as a response
    return new Response(JSON.stringify(users))
}