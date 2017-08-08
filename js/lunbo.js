/**
 * Created by duhua on 2016/12/3.
 */

var time=null;
    $(function() {

        var Page = (function() {

            var $navArrows = $( '#nav-arrows' ).hide(),
                $navDots = $( '#nav-dots' ).hide(),
                $nav = $navDots.children( 'span' ),
                $shadow = $( '#shadow' ).hide(),
                slicebox = $( '#sb-slider' ).slicebox( {
                    onReady : function() {

                        $navArrows.show();
                        $navDots.show();
                        $shadow.show();

                    },onBeforeChange : function( pos ) {

                        $nav.removeClass( 'nav-dot-current' );
                        $nav.eq( pos ).addClass( 'nav-dot-current' );

                    },
                    orientation : 'r',
                    cuboidsRandom : true,
                    disperseFactor : 10
                } ),

                init = function() {

                    initEvents();

                },
                initEvents = function() {

                    // add navigation events
                    $navArrows.children( ':first' ).on( 'click', function() {

                        slicebox.next();
                        clearInterval(time);
                        setTimeout(function () {
                            time= setInterval(function () {
                                slicebox.next();
                                return false;
                            },2000);
                        },3000);
                        return false;

                    } );

                    $navArrows.children( ':last' ).on( 'click', function() {

                        slicebox.previous();
                        clearInterval(time);
                        setTimeout(function () {
                            time= setInterval(function () {
                                slicebox.next();
                                return false;
                            },2000);
                        },3000);
                        return false;

                    } );
                    time= setInterval(function () {
                        slicebox.next();
                        return false;
                    },2000);

                    $nav.each( function( i ) {

                        $( this ).on( 'click', function( event ) {

                            clearInterval(time);
                            setTimeout(function () {
                                time= setInterval(function () {
                                    slicebox.next();
                                    return false;
                                },2000);
                            },3000);
                            var $dot = $( this );

                            if( !slicebox.isActive() ) {

                                $nav.removeClass( 'nav-dot-current' );
                                $dot.addClass( 'nav-dot-current' );

                            }

                            slicebox.jump( i + 1 );
                            return false;

                        } );

                    } );
                };

            return { init : init };

        })();

        Page.init();

    });

$(".topLi3").click(function () {

})
