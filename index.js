 class unicorn {
    constructor(name) {
        this.name = name; 
        this.food = 0; 
        this.fun = 3; 
        this.energy = 0;  
        console.log(`Your pet ${this.name} is born`);
    } 
eat() { 
        console.log(`${this.name} gobbles up some glitter.`);
        this.food +=5; 
        this.energy +=3;
        this.fun -=1;
        this.timeGoesBy();
} 
play() {
    console.log(`${this.name} is having fun..`);
    this.food -=3;
    this.fun +=2;
    this.energy -=2;
    this.timeGoesBy();
}
sleep() {
    console.log(`${this.name} is on slumber...`);
    this.food -=1;
    this.fun -=2;
    this.energy -=1;
    this.timeGoesBy();
}
timeGoesBy() { 
        if(this.energy <= 0){this.dies('exhaustion');} 
        if(this.food <= 0){ this.dies('starvation');} 
        if(this.fun <= 0){ this.dies('boredom');}
}   
dies(reason) { 
    console.log(` ${this.name} dies due to ${reason}`);}

}