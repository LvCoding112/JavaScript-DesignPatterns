const strategies = {
    planA(args) {
        console.log('计划A',args);
    },
    planB(args) {
        console.log('计划B',args);
    },
    planC(args) {
        console.log('计划C',args);
    },
};
function todo(stratege,args) {
    return strategies[stratege](args)
}
todo("planA",100);
