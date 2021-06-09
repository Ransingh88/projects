var slideIndex1 = 0;
function nextBtn1(list) {
    
    if (slideIndex1 < 12) {
        var slideItems = document.getElementsByClassName(list);
        
        for (let i = slideIndex1; i < slideIndex1 + 6; i++){
            slideItems[i].classList.remove("display");
        }
        slideIndex1 += 6;
        
        for (let i = slideIndex1; i < slideIndex1 + 6; i++){
            slideItems[i].classList.add("display");
        }
    } else {
        return;
    }
    
    
}
function prevBtn1(list) {
    
    if (slideIndex1 >5) {
        var slideItems = document.getElementsByClassName(list);
        
        for (let i = slideIndex1+5; i >= slideIndex1 ; i--){
            slideItems[i].classList.remove("display");
        }
        slideIndex1 -= 6;
    
        
        for (let i = slideIndex1+5; i >= slideIndex1; i--){
            slideItems[i].classList.add("display");
        }
    } else {
        return;
    }
    
    
}

var slideIndex2 = 0;
function nextBtn2(list) {
    
    if (slideIndex2 < 12) {
        var slideItems = document.getElementsByClassName(list);
        
        for (let i = slideIndex2; i < slideIndex2 + 6; i++){
            slideItems[i].classList.remove("display");
        }
        slideIndex2 += 6;
        
        for (let i = slideIndex2; i < slideIndex2 + 6; i++){
            slideItems[i].classList.add("display");
        }
    } else {
        return;
    }
    
    
}
function prevBtn2(list) {
    
    if (slideIndex2 >5) {
        var slideItems = document.getElementsByClassName(list);
        
        for (let i = slideIndex2+5; i >= slideIndex2 ; i--){
            slideItems[i].classList.remove("display");
        }
        slideIndex2 -= 6;
    
        
        for (let i = slideIndex2+5; i >= slideIndex2; i--){
            slideItems[i].classList.add("display");
        }
    } else {
        return;
    }
    
    
}

var slideIndex3 = 0;
function nextBtn3(list) {
    
    if (slideIndex3 < 12) {
        var slideItems = document.getElementsByClassName(list);
        
        for (let i = slideIndex3; i < slideIndex3 + 6; i++){
            slideItems[i].classList.remove("display");
        }
        slideIndex3 += 6;
        
        for (let i = slideIndex3; i < slideIndex3 + 6; i++){
            slideItems[i].classList.add("display");
        }
    } else {
        return;
    }
    
    
}
function prevBtn3(list) {
    
    if (slideIndex3 >5) {
        var slideItems = document.getElementsByClassName(list);
        
        for (let i = slideIndex3+5; i >= slideIndex3 ; i--){
            slideItems[i].classList.remove("display");
        }
        slideIndex3 -= 6;
    
        
        for (let i = slideIndex3+5; i >= slideIndex3; i--){
            slideItems[i].classList.add("display");
        }
    } else {
        return;
    }  
}

var slideIndex4 = 0;
function nextBtn4(list) {
    
    if (slideIndex4 < 12) {
        var slideItems = document.getElementsByClassName(list);
        
        for (let i = slideIndex4; i < slideIndex4 + 6; i++){
            slideItems[i].classList.remove("display");
        }
        slideIndex4 += 6;
        
        for (let i = slideIndex4; i < slideIndex4 + 6; i++){
            slideItems[i].classList.add("display");
        }
    } else {
        return;
    }
    
    
}
function prevBtn4(list) {
    
    if (slideIndex4 >5) {
        var slideItems = document.getElementsByClassName(list);
        
        for (let i = slideIndex4+5; i >= slideIndex4 ; i--){
            slideItems[i].classList.remove("display");
        }
        slideIndex4 -= 6;
    
        
        for (let i = slideIndex4+5; i >= slideIndex4; i--){
            slideItems[i].classList.add("display");
        }
    } else {
        return;
    }
    
    
}

var slideIndex5 = 0;
function nextBtn5(list) {
    
    if (slideIndex5 < 12) {
        var slideItems = document.getElementsByClassName(list);
        
        for (let i = slideIndex5; i < slideIndex5 + 6; i++){
            slideItems[i].classList.remove("display");
        }
        slideIndex5 += 6;
        
        for (let i = slideIndex5; i < slideIndex5 + 6; i++){
            slideItems[i].classList.add("display");
        }
    } else {
        return;
    }
    
    
}
function prevBtn5(list) {
    
    if (slideIndex5 >5) {
        var slideItems = document.getElementsByClassName(list);
        
        for (let i = slideIndex5+5; i >= slideIndex5 ; i--){
            slideItems[i].classList.remove("display");
        }
        slideIndex5 -= 6;
    
        
        for (let i = slideIndex5+5; i >= slideIndex5; i--){
            slideItems[i].classList.add("display");
        }
    } else {
        return;
    }
    
    
}