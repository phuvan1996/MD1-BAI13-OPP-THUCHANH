class MyDate {
    day;
    month;
    year;


    constructor(day, moth, year) {
        this.day = day;
        this.month = moth;
        this.year = year;
    }
    setday(day){
        this.day=day;
    }
    getday(){
        return this.day
    }
    setmonth(month){
        this.month=month;
    }
    getmonth(){
        return this.month;
    }
    setyear(year){
        this.year=year
    }
    getyear(){
        return this.year
    }
    setDate(day,month,year){
        this.day=day;
        this.month=month;
        this.year=year;
        toString()
        return this.day+'/'+this.month+'/'+this.year
    }
};