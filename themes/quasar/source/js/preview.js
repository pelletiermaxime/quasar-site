$(function() {
  var
    previewNode = $('#preview'),
    themePicker = $('#preview-chooser a'),
    themeNodes = $('#preview .theme'),
    iframes = $('#preview iframe'),
    contentNode = $('#main > .content'),
    selectedTheme = $.cookie('theme') || 'android',
    demoPoints = contentNode.find('input[data-demo]'),
    fullPageDemo = contentNode.find('input[data-fullpage-demo]'),
    externalPoints = contentNode.find('input[data-external-demo]'),
    viewSourceButtons = $('.view-source'),
    currentPage,
    mobileThemes = ['android', 'apple']
    ;

  function getSourceURL(page) {
    return 'https://github.com/rstoenescu/quasar-site/tree/master/demo-app/src/pages/' + page;
  }

  function getDemoURL(theme, page) {
    if (page.indexOf('http') === 0) {
      return page;
    }
    return '/demo-app/' + theme + '.html#/' + (page === 'index' ? '' : page);
  }

  function getExternalLinks(page, alwaysVisible) {
    return '<div class="demo-links ' + (alwaysVisible ? 'demo-always-visible' : '') + '">Demo: ' +
      mobileThemes.map(function(theme) {
        return '<a class="spawn-demo" ' +
          'href="' + getDemoURL(theme, page) + '" target="_blank"><i class="fa fa-' + theme + '"></i></a>';
      }).join(' ') +
      ' <a class="spawn-demo" target="_blank" href="' + getSourceURL(page) + '">' +
      'Source <i class="fa fa-file-code-o"></i></a></div>';
  }


  externalPoints.each(function() {
    var
      $this = $(this),
      page = $this.data('external-demo')
      ;

    $this.after(getExternalLinks(page, true));
  });

  /* eslint-disable no-extra-parens */
  if (
    !themePicker.length ||
    (!demoPoints.length && !fullPageDemo.length)
  ) {
    return;
  }

  if (isMobile()) {
    demoPoints.each(function() {
      var
        $this = $(this),
        page = $this.data('demo')
        ;

      $this.replaceWith(getExternalLinks(page, true));
    });

    fullPageDemo.replaceWith(
      getExternalLinks(
        fullPageDemo.data('fullpage-demo'),
        true
      )
    );

    return; // <<<<--- EARLY EXIT
  }

  if (fullPageDemo.length === 0) {
    $('#main .footer').css('margin-bottom', '100vh');
  }

  themePicker.click(function() {
    window.themePreview.selectTheme($(this).data('theme'));
  });

  $('#btn-close-desktop-view').click(function() {
    window.themePreview.selectTheme('desktop');
  });

  window.themePreview = {
    show: function(page) {
      previewNode.css('display', 'block');
      contentNode.addClass('with-previewer');
      currentPage = page;
      this.selectTheme(selectedTheme);
    },
    hide: function() {
      previewNode.css('display', 'none');
      contentNode.removeClass('with-previewer');
    },
    selectPage: function(page) {
      currentPage = page;

      iframes.each(function() {
        var
          $this = $(this),
          theme = $(this).attr('id').split('-')[0]
          ;

        if (selectedTheme !== theme) {
          return;
        }

        if (page) {
          $this.attr('src', getDemoURL(theme, page));
          viewSourceButtons
            .css('display', page.indexOf('http') === 0 ? 'none' : 'inline-block')
            .attr('href', getSourceURL(page));
        }
        else {
          $this.attr('src', '');
          viewSourceButtons.css('display', 'none');
        }
      });
    },
    selectTheme: function(theme) {
      themePicker.removeClass('active');

      if (theme === 'desktop' && selectedTheme === 'desktop') {
        theme = 'android';
        $('body').css('overflow', '');
      }

      $('#preview #preview-chooser a[data-theme="' + theme + '"]').addClass('active');

      themeNodes.css('display', 'none');
      $('#' + theme + '-preview').css('display', 'block');

      if (theme !== 'desktop') {
        $.cookie('theme', theme);
      }
      else if (selectedTheme !== 'desktop') {
        $('body').css('overflow', 'hidden');
      }

      selectedTheme = theme;
      this.selectPage(currentPage);
    }
  };

  if (fullPageDemo.length > 0) {
    window.themePreview.fullPageDemo = true;
    window.themePreview.show(fullPageDemo.data('fullpage-demo'));
  }
  else {
    window.themePreview.show();
  }

  function isMobile() {
    // eslint-disable-next-line
    return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4));
  }
});
