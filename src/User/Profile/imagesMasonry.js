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
