import { Component, OnInit, ViewEncapsulation } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss'],
})
export class ErrorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    $(function () {
      const liWidth = $('li').css('width');
      $('li').css('height', liWidth);
      $('li').css('lineHeight', liWidth);
      const totalHeight = $('#wordsearch').css('width');
      $('#wordsearch').css('height', totalHeight);
    });
    const causeRepaintsOn = $('h1, h2, h3, p');
    $(window).resize(function () {
      causeRepaintsOn.css('z-index', 1);
    });
    $(window).on('resize', function () {
      const liWidth = $('.one').css('width');
      $('li').css('height', liWidth);
      $('li').css('lineHeight', liWidth);
      const totalHeight = $('#wordsearch').css('width');
      $('#wordsearch').css('height', totalHeight);
    });
    this.letterHighlight();
  }
  letterHighlight() {
    // $(function() {
    /* 4 */
    $(this)
      .delay(1000)
      .queue(function () {
        $('li.one').addClass('selected');
        $(this).dequeue();
      })
      /* 0 */
      .delay(500)
      .queue(function () {
        $('.two').addClass('selected');
        $(this).dequeue();
      })
      /* 4 */
      .delay(500)
      .queue(function () {
        $('.three').addClass('selected');
        $(this).dequeue();
      })
      /* P */
      .delay(500)
      .queue(function () {
        $('.four').addClass('selected');
        $(this).dequeue();
      })
      /* A */
      .delay(500)
      .queue(function () {
        $('.five').addClass('selected');
        $(this).dequeue();
      })
      /* G */
      .delay(500)
      .queue(function () {
        $('.six').addClass('selected');
        $(this).dequeue();
      })
      /* E */
      .delay(500)
      .queue(function () {
        $('.seven').addClass('selected');
        $(this).dequeue();
      })
      /* N */
      .delay(500)
      .queue(function () {
        $('.eight').addClass('selected');
        $(this).dequeue();
      })
      /* O */
      .delay(500)
      .queue(function () {
        $('.nine').addClass('selected');
        $(this).dequeue();
      })
      /* T */
      .delay(500)
      .queue(function () {
        $('.ten').addClass('selected');
        $(this).dequeue();
      })
      /* F */
      .delay(500)
      .queue(function () {
        $('.eleven').addClass('selected');
        $(this).dequeue();
      })
      /* O */
      .delay(500)
      .queue(function () {
        $('.twelve').addClass('selected');
        $(this).dequeue();
      })
      /* U */
      .delay(500)
      .queue(function () {
        $('.thirteen').addClass('selected');
        $(this).dequeue();
      })
      /* N */
      .delay(500)
      .queue(function () {
        $('.fourteen').addClass('selected');
        $(this).dequeue();
      })
      /* D */
      .delay(500)
      .queue(function () {
        $('.fifteen').addClass('selected');
        $(this).dequeue();
      });
    // });
    return true;
  }
}
