document.addEventListener('gesturestart', function(e){
    e.preventDefault();
});

document.addEventListener('touchmove', function(e){
    e.preventDefault();
}, { passive:false });
