function towerOfHanoi(n,fromR,toR,usingR){
    if(n===1){
        console.log(`Move disk 1 from ${fromR} to ${toR}`);
        return;
    }
    towerOfHanoi(n-1,fromR,usingR,toR);
    console.log(`Move disk ${n} from ${fromR} to ${toR}`);
    towerOfHanoi(n-1,usingR,toR,fromR);
}

towerOfHanoi(3,'A','C','B');

// Big-O = O(2^n);
