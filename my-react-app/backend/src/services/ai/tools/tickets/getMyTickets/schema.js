module.exports={
    parameters:{
        type:"object",
        properties:{
            limit:{
                type:"number",
                description:"Maximum number of tickets to return"
            },

            status:{
                type:"string",
                enum:[
                    "Open",
                    "Assigned",
                    "In Progress",
                    "Resovled",
                    "Closed",
                    "Canceled"
                ],
                description:"Optional ticket status filter"
            },

            includeAll:{
                type:"boolean",
                description:"Whether all tickets should be returned."
            }
        },
        required:[]
    },

    returns:{
        type:"object",
        properties:{
            totalTickets:{
                type:"number",
            },
            returnedTickets:{
                type:"number"
            },
            tickets:{
                type:"array"
            }
        }
    }
};