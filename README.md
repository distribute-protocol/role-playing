# Larp life

## Materials for running distribute as a mostly-pen-and-paper role playing game

### ?? the problem space is known

one of you has a dietary restriction
tour of the kitchen*
fake prices on kitchen items (for budgeting)
(secret step) roll a dice for how much money everyone has
  possibly this is real money?
loose explanation of wtf is going on
  (our goals, please ask any questions but there may be cases we don't answer you)
documentation permission (audio recording?)
for tokens we're gonna use poker chips with different colours

### 1. People buy in for $ or clout

roll a dice for how much clout everyone
  (there's a minimum amount everyone has)
people can choose how much money they buy in with
  (there's a bonding curve that covers how much they get)
  (the bonding curve is assisted by a spreadsheet ??)
  (could skip right to this and roll for token amount here too)

### 2. People make proposals for what to do and stake on them

  people can stake on anyone's proposal
  these are written in silence,
  very little instruction, but should include a name, project cost in dollars and collatoral worth 5% of the project cost
  explain that only stakers can define tasks
  explain that reputation will be needed to pick up tasks
  we're not gonna explain what a proposal is too much besides that
  everyone has the same staking time

  read and review ... and then start the staking timer

  people are gonna stake

  some projects will get staked successfully, some won't
  need a ratio of clout to $


### 3. People propose task lists with breakdowns

  each breakdown should account for 100% of the work
  can boost someone else's task list too (by staking)

  all staked projects move forward
  only people who staked can submit task lists to proposals they staked on
  only one task list per person per proposal
  there is maybe a template for the tasks (cost of materials cost of labour, it's printed out in advance)
  maybe task lists are done in silence
  each person can only submit one task list to any project

  timer for task list writing and boosting
  can boost at any point during the timer, can change boosts

### 4. The most boosted task list wins

  tasks are little pieces of paper that people actually take

### 5. People claim tasks (and do them)

  people need enough reputation to pick up these tasks
  a formula for reputation calculations

  do stuff ???
  for our purposes, get everyone to keep any receipts

### 6. They submit their work

  eat dinner in theory

### 7. Their work is accepted or rejected by validators

  a validator is anyone with tokens
  accepting and rejecting is a token weighted vote
  if work is accepted the proposer, validators, and workers are rewarded
  if work is wholesale rejected, only the negative validators are rewarded
  rewards are also a formula somewhere

* If the work is disputed it goes to a vote

  the vote only happens if there's both a yes and a no
  there's a vote timer
  it's a token weighted vote

### Discussion:

  turn people's tokens back into money if they would like
  ask them about their thoughts?
  what did you not understand/what didn't make sense
  were you happy with the ultimate outcome
  were you happy with the process
  how likely would you be to play this game again
  what type of decisions do you think would be aided by this process
  any questions from you?

  ## rough frontend for formulas

display
  * total number of tokens in the system
  * total number of reputation in the system
  * total number of dollars in the system

calculate costs
  * buying tokens --> price of buying X tokens in dollars
    --> (total dollars in system / total number of tokens) * (number of tokens to buy) / (number of tokens to buy + total number of tokens)
  * selling tokens --> price of selling X tokens in dollars (different than purchase price)
    --> (number of tokens to sell * total dollars in system) / (total number of tokens)

  * cost of proposing a project with tokens
    --> (cost of project in dollars / total dollars in system) * (total number of tokens) / 20
  * cost of proposing a project with reputation
    --> (cost of project in dollars / total dollars in system) * (total number of reputation) / 20
  ***** add 11% of proposed cost to actual project cost
    --> 5% for the proposer
    --> 5% for the validators
    --> 1% for the originator

  * how much a user's task list is worth
    --> (((user token balance / total number of tokens) + (user reputation balance / total number of reputation)) / 2) + (((user tokens staked on project / total tokens staked on project) + (user reputation staked on project / total reputation staked on project)) / 2) / 2

  * how much reputation a user needs to claim a task
    --> project's reputation cost * task percentage

  * cost to validate a task
    --> task percentage * proposed cost / total dollars / totalTokens / 100

calculate rewards
  * reward proposer
    --> if their project makes it to completion (assume 100% pass percentage), their collateral tokens or reputation are returned to them, and they are rewarded with 5% of the proposed project cost
  * reward originator
    --> if the project makes it to completion (assume 100% pass percentage), they are rewarded with 1% of the proposed project cost
  * reward worker
    --> if their task is validated complete, they receive twice their collateral reputation (returned & rewarded)
  * reward validator
    --> if their validation is correct, they receive their validation entry token fee back as well as their validation position's proportion of 5% of the project cost
    --> if their validation is incorrect, they receive half of their validation entry token fee back
