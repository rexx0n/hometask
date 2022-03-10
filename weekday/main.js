function weekday(number) {
   let result
   switch(number) {
    case 1:
        result = 'Today is Monday'
        break;
    case 2:
        result = 'Today is Tuesday';
        break;
    case 3:
        result = 'Today is Wednesday'
        break;
    case 4:
        result = 'Today is Thursday'
        break;
    case 5:
        result = 'Today is Friday'
        break;
    case 6:
        result = 'Today is Saturday'
        break;
    case 7:
        result = 'Today is Sunday'
        break;
     default:
         result = "There are seven days in a week!"; 
   }
   return console.log(result)
}
weekday(12)
weekday(1) 
weekday(2)
weekday(5)