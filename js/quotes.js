const quotes = [
    {
        quote : "우리가 찾고 있는 마법은 우리가 피하고 있는 일 안에 있다" ,
        autor : "Chris williamson" ,
    },
    {
        quote : '사람들이 유일하게 나에게 신경쓰는 것은 "나와 함께 있을때 어떤 기분을 느끼느냐" 이다' ,
        autor : "Jimmy Rex" ,
    },
    {
        quote : "진짜 변화는 안전한 곳에서 벗어나 새로운 곳으로 나아갈 때 시작된다는 사실을 깨닫게 될때 시작된다" ,
        autor : "PARADIGM SHIFT" ,
    },
    {
        quote : "훌륭한 사람을 만나지 않고 좋은 책을 읽지 않는다면 당신은 5년 후에도 지금 그 모습 그대로 일것이다." ,
        autor : "Charlie Jones" ,
    },
    {
        quote : "헤어짐은 축하할 일이다 우리는 새로운 세계를 선택했다라고 볼수있다" ,
        autor : "김창옥" ,
    },
    {
        quote : "진짜 자신감은 거짓에서 나올 수가 없다 자신감은 내면에서 나온다" ,
        autor : "<강인함의 힘>중에서" ,
    },
    {
        quote : `"인내"는 단순히 기다리는게 아니고 기다리는 동안 어떻게 행동하는가 이다` ,
        autor : "Joyce Meyer" ,
    },
    {
        quote : "시작하기로 마음 먹었으면 어떤것도 의심하지 말고 그 목표를 향해서 계속 가라" ,
        autor : "한혜진" ,
    },
    {
        quote : "당신이 이길 때 당신이 생각하는 것만큼 좋지 않습니다 당신이 질 때 당신이 생각하는 것보다 나쁘지 않습니다" ,
        autor : "Marcus Aurelius" ,
    },
    {
        quote : "이룰 수 없는 꿈을 꿔도 괜찮아요. 한계를 자기 스스로 만들지 않았으면 좋겠어요" ,
        autor : "모니카" ,
    },
    {
        quote : `"그건 할 수 없어"라는 말을 들을 때마다 나는 성공에 가까워졌음을 안다` ,
        autor : "Michael Flatley" ,
    },
    {
        quote : `슬픔을 지우려고 하지 마세요 그냥 그 슬픔과 같이간다 생각하면 좋을 거 같아요` ,
        autor : "김창옥" ,
    },
    {
        quote : `어제와 같은 삶을 살면서 다른 미래를 기대하는 것이야말로 정신병 초기 증세다` ,
        autor : "Albert Einstein" ,
    },
    {
        quote : `세상은 절대적 때가 아니라 자기만의 때가 있다` ,
        autor : "김창옥" ,
    },
    {
        quote : `"자신감" 자신감의 핵심은 행동이다 시도한다고 해서 죽지 않는다 그저 무언가 배우게 된다` ,
        autor : "Jay Shetty" ,
    },
    {
        quote : `내 마음을 읽고 나 스스로를 읽어내고 내면의 나를 잘 알아야한다` ,
        autor : "유재석" ,
    },
    {
        quote : `살아보니깐 받기만 해도 괜찮더라 이만큼 받으면 이만큼 주고 계산 딱딱 떨어지게 살아지지가 않아요 받기만해도 괜찮아` ,
        autor : "SBS drama 치얼업" ,
    },
    {
        quote : `당신의 마음을 비우세요 마치 형체가 없는 물 처럼 당신이 컵에 넣으면 컵이되고 찻잔에 넣으면 찻잔이 된다` ,
        autor : "Bruce lee" ,
    },
    {
        quote : `분노의 "정의"는 이 말을 제일 좋아하는데 분노의 "정의"는 나 자신이 나에게 주는 형벌이다` ,
        autor : "Daily Inspiration" ,
    },
    {
        quote : `갈등을 피하면 갈등은 해결되지 않고 오히려 더 증폭된다` ,
        autor : "Jordan Bernt Peterson" ,
    },
    {
        quote : `상처 받는게 싫어 좋은 사람만 만나지 마세요` ,
        autor : "신동엽" ,
    },
    {
        quote : `위험을 감수하지 않으면 인생에서 가치 있는 것은 아무것도 없다` ,
        autor : "Denzel Washington" ,
    },
]

const quote = document.querySelector("#quote span:first-child");
const autor = document.querySelector("#quote span:last-child");

const toDayQuotes = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = toDayQuotes.quote;
autor.innerText = `-${toDayQuotes.autor}-`;