$(function(){
  nextEvent()
})

function nextEvent() {
  $.ajax({
    dataType: 'jsonp',
    url:'https://connpass.com/api/v1/event/',
    type:'GET',
    data:{
      'series_id': 2536,
      'order': 2,
      'count': 1
    }
  })
  .done((data) => {
    setNextEventToDOMs(data)
  })
}

function setNextEventToDOMs(data) {
  var datetime = buildDateTime(data.events[0].started_at, data.events[0].ended_at)
  $('#nextEventTitle').text(data.events[0].title)
  $('#nextEventURL').attr('href', data.events[0].event_url)
  $('#nextEventDateTime').text(datetime)
}

function buildDateTime(start, end) {
  return moment(start).format('YYYY-MM-DD(ddd) HH:mm') +
    '~' + moment(end).format('HH:mm')
}
