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

    describe('buildInputs', function () {
        var inputs= 910;

        it(' print correct text', function () {

            var expectText = [
              '9','1','0'
            ];

            expect(buildInputs(inputs)).toEqual(expectText);
        });
    });

    describe('buildLcd', function () {
        var inputs;
        var inputs1;
        var allLcds;

        beforeEach(function () {
            allLcds = loadAllLcds();
            inputs = ['9','1','0'];
            inputs1 = ['2','3','4','5'];
        });

        it(' print correct text', function () {

            var expectText = [
                {value:['._.','|_|','..|']},
                {value:['...','..|','..|']},
                {value:['._.','|.|','|_|']}
            ];

            expect(buildLcd(inputs,allLcds)).toEqual(expectText);
        });

        it(' print correct text', function () {

            var expectText = [
                {value:['._.','._|','|_.']},
                {value:['._.','._|','._|']},
                {value:['...','|_|','..|']},
                {value:['._.','|_.','._|']}
            ];

            expect(buildLcd(inputs1,allLcds)).toEqual(expectText);
        });
    });

    describe('buildLcdText', function () {
        var inputs = [
                {value:['._.','|_|','..|']},
                {value:['...','..|','..|']},
                {value:['._.','|.|','|_|']}
            ];

        it(' print correct text', function () {

            var expectText =
                '._. ' + '... ' + '._. ' + '\n' +
                '|_| ' + '..| ' + '|.| ' + '\n' +
                '..| ' + '..| ' + '|_| ' + '\n';

            expect(buildLcdText(inputs)).toEqual(expectText);
        });
    });
});
