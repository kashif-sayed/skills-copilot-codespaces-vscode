function skillsMember(){
    return {
        restrict: 'E',
        controller: 'SkillsMemberController',
        controllerAs: 'vm',
        bindToController: true,
        scope: {
            member: 'm'
        }
    }
}