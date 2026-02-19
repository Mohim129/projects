//list item 2 click handler
document.getElementById('item-2').addEventListener('click', function(event){
    console.log('item-2 clicked')
    event.stopPropagation()
}
)
//ol click handler
document.getElementById('item-list').addEventListener('click', function(event){
    console.log('ol clicked')
    event.stopImmediatePropagation()
})
//section click handler
document.getElementById('list-container').addEventListener('click', function(){
    console.log('section clicked')
})
//body click handler
document.getElementById('body').addEventListener('click', function(){
    console.log('body clicked')
})