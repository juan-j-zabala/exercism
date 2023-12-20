/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Creates a new visitor.
 *
 * @param {string} name
 * @param {number} age
 * @param {string} ticketId
 * @returns {Visitor} the visitor that was created
 */
export function createVisitor(name, age, ticketId) {
  const VISITOR_INDEX = {}
  VISITOR_INDEX.name = name
  VISITOR_INDEX.age = age
  VISITOR_INDEX.ticketId = ticketId
  return VISITOR_INDEX
}

/**
 * Revokes a ticket for a visitor.
 *
 * @param {Visitor} visitor the visitor with an active ticket
 * @returns {Visitor} the visitor without a ticket
 */
export function revokeTicket(visitor) {
  visitor.ticketId = null
  return visitor
}

/**
 * Determines the status a ticket has in the ticket tracking object.
 *
 * @param {Record<string, string|null>} tickets
 * @param {string} ticketId
 * @returns {string} ticket status
 */
export function ticketStatus(tickets, ticketId) {
 
  // if (tickets?.[ticketId] === undefined) return 'unknown ticket id' 

  // tickets[ticketId]?? 'not sold' 
  // return 'sold to ' + tickets[ticketId]
  switch(true){
    case (typeof tickets[ticketId] === "string"):
      return "sold to " + tickets[ticketId];
    case (tickets[ticketId] === null):
      return "not sold"
    default:
      return "unknown ticket id";
  }
}

/**
 * Determines the status a ticket has in the ticket tracking object
 * and returns a simplified status message.
 *
 * @param {Record<string, string|null>} tickets
 * @param {string} ticketId
 * @returns {string} ticket status
 */
export function simpleTicketStatus(tickets, ticketId) {
  let simple_ticket = tickets[ticketId] || (tickets[ticketId]?? 'invalid ticket !!!')
  return simple_ticket
}

/**
 * Determines the version of the GTC that was signed by the visitor.
 *
 * @param {VisitorWithGtc} visitor
 * @returns {string | undefined} version
 */
export function gtcVersion(visitor) {
  return visitor?.gtc?.version
}
