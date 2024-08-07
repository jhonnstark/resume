$(window).on('load',function(){
  gsap.to('#loader',1,{y:"-100%"});
  gsap.to('#loader',1,{opacity:0});
  gsap.to('#loader',0,{display:"none",delay:1});
  gsap.to('#header',0,{display:"block",delay:1})
  gsap.to('#navigation-content',0,{display:"none"});
  gsap.to('#navigation-content',0,{display:"flex",delay:1});
})
$(function(){
  $('.color-panel').on("click",function(e) {
    e.preventDefault();
    $('.color-changer').toggleClass('color-changer-active');
});
$('.colors a').on("click",function(e) {
  e.preventDefault();
  var attr = $(this).attr("title");
  console.log(attr);
  $('head').append('<link rel="stylesheet" href="css/'+attr+'.css">');
});
});
$(function(){
     $('.menubar').on('click',function(){
         gsap.to('#navigation-content',.6,{y:0});
     })
     $('.navigation-close').on('click',function(){
        gsap.to('#navigation-content',.6,{y:"-100%"});
    });
   }); 

$(function(){
    var TxtRotate = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
      };
      
      TxtRotate.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];
      
        if (this.isDeleting) {
          this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
          this.txt = fullTxt.substring(0, this.txt.length + 1);
        }
      
        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
      
        var that = this;
        var delta = 200 - Math.random() * 100;
      
        if (this.isDeleting) { delta /= 2; }
      
        if (!this.isDeleting && this.txt === fullTxt) {
          delta = this.period;
          this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
          this.isDeleting = false;
          this.loopNum++;
          delta = 100;
        }
      
        setTimeout(function() {
          that.tick();
        }, delta);
      };
      
      window.onload = function() {
        var elements = document.getElementsByClassName('txt-rotate');
        for (var i=0; i<elements.length; i++) {
          var toRotate = elements[i].getAttribute('data-rotate');
          var period = elements[i].getAttribute('data-period');
          if (toRotate) {
            new TxtRotate(elements[i], JSON.parse(toRotate), period);
          }
        }

        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".txt-rotate > .wrap { border-right: 0em solid #666 ; }";
        document.body.appendChild(css);
      };
})
$(function(){

    $('#about-link').on('click',function(){
      gsap.to('#navigation-content',0,{display:"none",delay:.7});
      gsap.to('#navigation-content',0,{y:'-100%',delay:.7});
  gsap.to('#header',0,{display:"none"});
gsap.to('#blog',0,{display:"none"});
gsap.to('#portfolio',0,{display:"none"});
   gsap.to('#breaker',0,{display:"block"});
   gsap.to('#breaker-two',0,{display:"block",delay:.1});
gsap.to('#contact',0,{display:"none"});
   gsap.to('#breaker',0,{display:"none",delay:2});
   gsap.to('#breaker-two',0,{display:"none",delay:2});
   gsap.to('#about',0,{display:"block",delay:.7});
   gsap.to('#navigation-content',0,{display:'flex',delay:2});
 })
 $('#contact-link').on('click',function(){
   gsap.to('#navigation-content',0,{display:"none",delay:.7});
   gsap.to('#navigation-content',0,{y:'-100%',delay:.7});
gsap.to('#header',0,{display:"none"});
gsap.to('#about',0,{display:"none"});
gsap.to('#blog',0,{display:"none"});
gsap.to('#portfolio',0,{display:"none"});
gsap.to('#breaker',0,{display:"block"});
gsap.to('#breaker-two',0,{display:"block",delay:.1});
gsap.to('#breaker',0,{display:"none",delay:2});
gsap.to('#breaker-two',0,{display:"none",delay:2});
gsap.to('#contact',0,{display:"block",delay:.7});
gsap.to('#navigation-content',0,{display:'flex',delay:2});
})
$('#portfolio-link').on('click',function(){
  gsap.to('#navigation-content',0,{display:"none",delay:.7});
  gsap.to('#navigation-content',0,{y:'-100%',delay:.7});
gsap.to('#header',0,{display:"none"});
gsap.to('#about',0,{display:"none"});
gsap.to('#contact',0,{display:"none"});
gsap.to('#blog',0,{display:"none"});
gsap.to('#breaker',0,{display:"block"});
gsap.to('#breaker-two',0,{display:"block",delay:.1});
gsap.to('#breaker',0,{display:"none",delay:2});
gsap.to('#breaker-two',0,{display:"none",delay:2});
gsap.to('#portfolio',0,{display:"block",delay:.7});
gsap.to('#navigation-content',0,{display:'flex',delay:2});
})
$('#blog-link').on('click',function(){
  gsap.to('#navigation-content',0,{display:"none",delay:.7});
  gsap.to('#navigation-content',0,{y:'-100%',delay:.7});
gsap.to('#header',0,{display:"none"});
gsap.to('#about',0,{display:"none"});
gsap.to('#portfolio',0,{display:"none"});
gsap.to('#contact',0,{display:"none"});
gsap.to('#breaker',0,{display:"block"});
gsap.to('#breaker-two',0,{display:"block",delay:.1});
gsap.to('#breaker',0,{display:"none",delay:2});
gsap.to('#breaker-two',0,{display:"none",delay:2});
gsap.to('#blog',0,{display:"block",delay:.7});
gsap.to('#navigation-content',0,{display:'flex',delay:2});
})
$('#home-link').on('click',function(){
  gsap.to('#navigation-content',0,{display:"none",delay:.7});
  gsap.to('#navigation-content',0,{y:'-100%',delay:.7});
gsap.to('#header',0,{display:"none"});
gsap.to('#about',0,{display:"none"});
gsap.to('#portfolio',0,{display:"none"});
gsap.to('#contact',0,{display:"none"});
gsap.to('#blog',0,{display:"none"});
gsap.to('#breaker',0,{display:"block"});
gsap.to('#breaker-two',0,{display:"block",delay:.1});
gsap.to('#breaker',0,{display:"none",delay:2});
gsap.to('#breaker-two',0,{display:"none",delay:2});
gsap.to('#header',0,{display:"block",delay:.7});
gsap.to('#navigation-content',0,{display:'flex',delay:2});
})

})
$(function(){
 var body =  document.querySelector('body');
 var $cursor = $('.cursor')
   function cursormover(e){
    
    gsap.to( $cursor, {
      x : e.clientX ,
      y : e.clientY,
      stagger:.002
     })
   }
   function cursorhover(e){
    gsap.to( $cursor,{
     scale:1.4,
     opacity:1
    })
    
  }
  function cursor(e){
    gsap.to( $cursor, {
     scale:1,
     opacity:.6
    }) 
  }
  $(window).on('mousemove',cursormover);
  $('.menubar').hover(cursorhover,cursor);
  $('a').hover(cursorhover,cursor);
  $('.navigation-close').hover(cursorhover,cursor);
})

const messages = {
  en: {
    message: {
      hello: 'hello world'
    },
    menu: {
      home: 'HOME',
      about: 'ABOUT',
      portfolio: 'PORTFOLIO',
      contact: 'CONTACT',
    },
    header: {
      subtitle: 'I am a',
      rotate: '[ " Programmer.", " Developer.", " Freelancer." ]',
    },
    about: {
      career: 'Professional',
      professional: 'career',
      download: 'Download ',
      resume: 'resume.',
      description: 'With more than 10 years of professional experience, responsible and used to work on projects to be delivered on time and under pressure, I have the knowledge to complete your project. I like new challenges and enjoy every new project.',
      iam: 'I am a',
      developer: 'Web developer',
      specialized: 'specialized in',
      my: 'My',
      services: 'Services',
      design:{
        title: 'Web Development',
        description: 'Web page development, administration systems and APIs in different languages',
      },
      dataBase: {
        title: 'Database',
        description: 'Database administration, design and programming'
      },
      academic: {
        title: 'Academic',
        description: 'Programming courses, from basic to advanced level.'
      },
      my: 'Mis',
      skills: 'Habilidades',
    },
    contact: {
      title: 'Contact',
      me: 'me',
      a: 'Get',
      orders: 'In Touch.',
      subtitle: 'Do you have a project in mind? Let\'s talk!',
      location: "Location",
      name: 'Name',
      city: 'Mexico City, Mexico',
      email: 'Email',
    },
    portfolio: {
      mi: ' My ',
      title: 'Portfolio',
      subtitle: 'Some of my ',
      works: 'previous projects',
      description: 'Here you can see some of the projects I have worked on, from web pages to administration systems.'
    }
  },
  es: {
    message: {
      hello: 'hola'
    },
    menu: {
      home: 'INTRO',
      about: 'CARRERA Y CV',
      portfolio: 'PORTAFOLIO',
      contact: 'CONTACTO',
    },
    header: {
      subtitle: 'Soy',
      rotate: '[ " Programador.", " Desarrollador.", " Freelancer." ]',
    },
    about: {
      career: 'Carrera',
      professional: 'profesional',
      download: 'Descarga mi ',
      resume: 'CV.',
      description: 'Con más de 10 años de experiencia profesional, responsable y acostumbrado a trabajar en proyectos a entregar en tiempo y bajo presión, tengo los conocimientos para llevar a término tu proyecto. Me gustan los nuevos retos y disfruto cada proyecto nuevo.',
      iam: 'Soy un',
      developer: 'desarrollador Web',
      specialized: 'especializado en',
      my: 'Lo que me',
      services: 'apaciona',
      design:{
        title: 'Desarrollo Web',
        description: 'Consrtuccion de paginas web, sistemas de administracion y APIs en diferentes lenguajes',
      },
      dataBase: {
        title: 'Base de datos',
        description: 'Administracion, diseño y programacion de base de datos'
      },
      academic: {
        title: 'Academico',
        description: 'Cursos de programacion, desde nivel basico hasta avanzado.'
      },
      my: 'Mis',
      skills: 'Habilidades',
    },
    contact: {
      title: 'Contácta',
      me: 'me',
      a: 'a',
      orders: 'tus ordenes.',
      subtitle: '¿Tienes un proyecto en mente? ¡Hablemos!',
      location: "Ubicación",
      name: 'Nombre',
      city: 'Ciudad de México, México',
      email: 'Correo',
    },
    portfolio: {
      mi: ' Mi ',
      title: 'Portafolio',
      subtitle: 'Algunos de mis',
      works: 'trabajos',
      description: 'Aquí puedes ver algunos de los proyectos en los que he trabajado, desde páginas web hasta sistemas de administración.'
    }
  }
}