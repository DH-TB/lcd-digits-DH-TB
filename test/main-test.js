describe('LCD', function () {
    var inputs;
    var allLcds;

    beforeEach(function () {
        allLcds = loadAllLcds();
        inputs = 910;
    });

    it(' print correct text', function () {

        spyOn(console, 'log');

        printLCD(inputs);

        var expectText =
            '._. ' + '... ' + '._. ' + '\n' +
            '|_| ' + '..| ' + '|.| ' + '\n' +
            '..| ' + '..| ' + '|_| ' + '\n';

        expect(console.log).toHaveBeenCalledWith(expectText);
    });
});

describe("unit test",function(){

    describe('buildLcd', function () {
        var inputs;
        var allLcds;

        beforeEach(function () {
            allLcds = loadAllLcds();
            inputs = 910;
        });

        it(' print correct text', function () {

            var expectText = [
                {value:['._.','|_|','..|']},
                {value:['...','..|','..|']},
                {value:['._.','|.|','|_|']}
            ];

            expect(buildLcd(inputs,allLcds)).toEqual(expectText);
        });
    });
    describe('buildLcd', function () {
        var inputs;
        var allLcds;

        beforeEach(function () {
            allLcds = loadAllLcds();
            inputs = 9108;
        });

        it(' print correct text', function () {

            var expectText = [
                {value:['._.','|_|','..|']},
                {value:['...','..|','..|']},
                {value:['._.','|.|','|_|']},
                {value:['._.','|_|','|_|']}
            ];

            expect(buildLcd(inputs,allLcds)).toEqual(expectText);
        });
    });

    describe('buildLcdText', function () {
        var inputs;

        beforeEach(function () {
            inputs = [
                {value:['._.','|_|','..|']},
                {value:['...','..|','..|']},
                {value:['._.','|.|','|_|']}
            ];
        });

        it(' print correct text', function () {

            var expectText = '._. ' + '... ' + '._. ' + '\n' +
                '|_| ' + '..| ' + '|.| ' + '\n' +
                '..| ' + '..| ' + '|_| ' + '\n';

            expect(buildLcdText(inputs)).toEqual(expectText);
        });
    });
});
