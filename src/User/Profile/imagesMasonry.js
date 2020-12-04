<<<<<<< HEAD
var grid = document.querySelector('.grid-active');

var msnry = new Masonry(grid, {
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    percentPosition: true
});

imagesLoaded(grid).on('progress', function () {
    msnry.layout();
});

var grid = document.querySelector('.grid-expire');

var msnry = new Masonry(grid, {
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    percentPosition: true
});

imagesLoaded(grid).on('progress', function () {
    msnry.layout();
});
=======
var grid = document.querySelector('.grid-active');

var msnry = new Masonry(grid, {
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    percentPosition: true
});

imagesLoaded(grid).on('progress', function () {
    msnry.layout();
});

var grid = document.querySelector('.grid-expire');

var msnry = new Masonry(grid, {
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    percentPosition: true
});

imagesLoaded(grid).on('progress', function () {
    msnry.layout();
});
>>>>>>> 0f8a6429f481749053d3a9988cb5093c79697d2e
