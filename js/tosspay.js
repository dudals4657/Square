var clientKey = 'test_ck_lpP2YxJ4K87A2AMLpeLVRGZwXLOb'
var tossPayments = TossPayments(clientKey)

var paybuttonmMINI = document.getElementById('minipay')
paybuttonmMINI.addEventListener(click, 
    tossPayments.requestPayment('카드', { // 결제 수단 파라미터
    // 결제 정보 파라미터
    amount: 15000,
    orderId: 'IezJT_QsdDTyU2o5YGUnU',
    orderName: '토스 티셔츠 외 2건',
    customerName: '박토스',
    successUrl: 'http://localhost:8080/success',
    failUrl: 'http://localhost:8080/fail',
  }))


