import React from 'react'
import FaqAccordion from './FaqAccordion'

const FaqBilling = () => {

  const FaqQuestions = [
    {
      id: 1,
      question: ' When is my monthly payment due?',
      answer: 'Airway Broadband offers a subscription service. Payment is due no later than the 13th day of the month of service. (For a complete explanation of payment and fees, refer to the "Terms of Service".) ',
    },
    {
      id: 2,
      question: 'What is Fair usage policy (FUP)? ',
      answer: ' In simple words the FUP (Fair Usage Policy) means that even though you may subscribe to an unlimited broadband plan say for example 1 Mbps unlimited per month, and if your usage is very high and crosses a certain cap as decided by the broadband provider your connection speed will then be reduced to 512 kbps for the remaining month.',
    },
    {
      id: 3,
      question: 'Why are Broadband providers implementing FUP? ',
      answer: ' If you have a 1 Mbps unlimited connection for a month and say for example you use the services for a full month, 24 hours a day, you will be using a lot of bandwidth. Now imagine many consumers doing the same. This will stall the whole network which is not up to date, resulting in drop in connection or slow connections. The broadband service providers are not able to handle too many simultaneous users and neither do they have advanced/ upgraded technology to do so, hence they have come up with the FUP crap.',
    },
    {
      id: 4,
      question: 'What is Fair use and contention ratios? ',
      answer: 'Customers share internet connections - the number of people sharing a connection is called the "contention ratio" - and can be up to 50 people per line. So if one user is constantly downloading, it will slow the connection for the other users who are on at the same time. Fair usage policies limit the usage of one user over another at peak times, so that the performance is not affected for the rest of the group.Providers tend to group people according to usage, so people who download all the time are grouped together. These restrictions are imposed to ensure that the best quality of broadband is available to the maximum number of customers.So even though you have a 24Mbps connection with unlimited downloads, your speed may be heavily limited at peak times. This is frustrating for a lot of people who have specifically bought high- speed packages because of their usage patterns.This kind of advertising is aimed at a heavy user and encourages people to get super speeds and unlimited allowances. Check with your ISP to see what your contention ratio is, and what they classify as fair usage. ',
},
  {
    id: 5,
    question: 'What is fair? ',
    answer: ' Day to day surfing, checking emails and occasional downloading will not get you into trouble with your ISP. However, downloading a 1-3GB movie every day is almost certain to. The key is to keep an eye on the amount that you are downloading. Then if you’re classed as a heavy or excessive user, restructure your internet usage pattern so that you are not uploading or downloading at peak times. If you don’t take heed of their warnings, your ISP will slow down the speed of your connection at peak times. In serious cases your ISP may terminate your internet connection.',
  },
  {
    id: 1,
    question: 'How will I know when I have cross my download limits? ',
    answer: ' We will send you an email/sms when you reach 80% of your plan’s data transfer limit and again when you reach 100%.A majority of the users do not exceed the download limits as set in their plans and should not expect to receive such alerts as a norm.',
    },
{
  id: 1,
    question: 'How does Airway Broadband implement this policy? ',
      answer: 'Airway Broadband sets a monthly data transfer limit; this is different for different plans. Once you reach your data transfer limit, your speed will reduce as stated in your plan. Of course, at the start of your next monthly billing cycle, your monthly speed/ download limit will be reset. Also during the month, you can continue to download all you want, there are no additional data transfer caps set by Airway. Downloads continue to be unlimited as they always were. ',
    },
{
  id: 1,
    question: 'Is there FUP on all broadband plans? ',
      answer: ' FUP is applicable on all unlimited data transfer plans. The data transfer continues to be unlimited, albeit at reduced speeds after FUP. Like mentioned before, FUP limits are imposed to ensure that the best quality of broadband is available to the maximum number of internet users.',
    },
{
  id: 1,
    question: 'What is Account ID ? ',
      answer: 'Account Number is the unique identification number assigned to every customer in Airway Broadband and this should be handy, when you interact with Airway Helpdesk Support and executive. ',
    },
{
  id: 1,
    question: ' What happens in Fair Usage Policy ?',
  answer: 'Under the policy we have defined fair usage levels for unlimited data transfer plans and needless to mention, the usage levels set are very generous such that most customers will not be affected by the Fair Usage Policy.',
},
{
  id: 1,
    question: 'What would happen with the speed of service after I reach the FUP ?',
  answer: ' On reaching the fair usage level, the plan speed would be optimized to Post FUP speed mentioned above in the table, for the rest of the month/ billing cycle as applicable. Please note that the speeds would be upgraded to the normal speeds at the start of the next month /billing cycle as applicable. While the subscriber has always the choice of choosing a right plan basis their individual requirements which is available in our website www.airwaybroadband.com',
},
{
  id: 1,
    question: 'Can I option for a Top-up after I reach my FUP ?',
  answer: 'We have a choice of Top up plans that are available basis individual requirements.',
},
{
  id: 1,
    question: ' What is the impact of Fair Usage Policy on data transfer limits?',
  answer: 'We assure you that the data transfer limits remain unlimited and there will be no change on the same.',
},
{
  id: 1,
    question: ' Will I get a copy of my bill / statement ?',
  answer: 'Simply drop a mail from registered mailid to account@pccareonline.in',
},
{
  id: 1,
    question: 'How do I get to know my usage ?',
  answer: 'Simply Login with your user ID and password. http://user.airwaybroadband.com',
},
{
  id: 1,
    question: 'How do I make my payments to Airway ?',
  answer: ' We have a range of payment options to suit our customer needs. Simply click http://www.airwaybroadband.com/bill_payment.php (1.) Online Payment: Make an online payment by simply clicking http://airwaybroadband.com/bill_payment.php 2. )Payment pick - up at door step: You can request by on call in our account department.',
},
{
  id: 1,
    question: ' After payment, would my account get activated instantly ?',
  answer: ' If the account is not active at the time of payment, it would require a minimum of 4 workings hours to a maximum of 72 Hours for the account to become active, depending upon the mode of payment.',
    },
  ]

return (
  <div className='faq-component'>
    {
      FaqQuestions.map((faqquestion) => {
        return <FaqAccordion key={faqquestion.id} {...faqquestion} />


      })
    }
  </div>)
}

export default FaqBilling