const TicketService=require("../../../../ticket/TicketService.js");
const ToolResult=require("../../../sdk/ToolResult.js");
const UIComponent = require("../../../sdk/ui/UIComponent.js");
async function getMyTickets(
    parameters,
    context)
{
    const {
        limit=5,
        includeAll=false,
        status=null
    }=parameters;

    const tickets=await TicketService.getMyTickets({
        userId:context.userId
    });

    const overallTicketCount=tickets.length;

    let filteredTickets=tickets;

    if(status)
    {
        filteredTickets=filteredTickets.filter(
            ticket=>ticket.status===status
        );
    }

        const totalTickets=filteredTickets.length;

        if(!includeAll)
        {
            filteredTickets=filteredTickets.slice(0,limit);
        }

        const formattedTickets=filteredTickets.map(ticket=>({
            id:ticket._id.toString(),
            title:ticket.title,
            department:ticket.department,
            category:ticket.category,
            priority:ticket.priority,
            status:ticket.status,
            createdAt:ticket.createdAt
        }));
   

    return ToolResult.success({
        summary:
        `Found ${overallTicketCount} ticket(s). Returning ${formattedTickets.length} matching ticket(s).`,

        data:{
            totalTickets: overallTicketCount,
            matchingTickets: totalTickets,
            returnedTickets: formattedTickets.length,
            tickets:formattedTickets
        },

        metadata:{
            navigation:{
                type:"ticket_list",
                hasMore:totalTickets>formattedTickets.length,
                ticketIds:formattedTickets.map(ticket=>ticket.id)
            }
        },

        ui:[
            UIComponent.ticketList({
                tickets:formattedTickets,
                totalTickets,
                hasMore:
                totalTickets>formattedTickets.length
        })
        ]
    });
}

module.exports={
    getMyTickets
};