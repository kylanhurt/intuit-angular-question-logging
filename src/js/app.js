/*
* File: html5-boilerplate/src/js/app.js
* Date Created: 2016-06-14
* Author: Kylan Hurt (kylan@datagoniaweb.com, kylan.hurt@gmail.com)
* Description: this is the primary Javascript for my question and answer-logging app for Intuit's interviewing process
*/

//currently empLog has no dependencies, it may also define the module that bootstraps the HTML page (ng-app)
angular.module("intuit", [])
    .controller('mainCtrl', MainCtrl)

function MainCtrl( $scope ) {
	$scope.incrementQuestion = incrementQuestion;
	$scope.decrementQuestion = decrementQuestion;

	var iterator = 0;
	$scope.iterator = iterator;	
	console.log('scope iterator: ', $scope.iterator, iterator);
	var questions = [
		{
			question: "What day of the year is it?",
			answer: "",
			imgSrc : "https://turbotax.intuit.com/experiences/rtb-pods/images/icon-max-refund-retina.87850afd.png"
		}, {
			question: "What month of the year is it?",
			answer: "",
			imgSrc : "https://turbotax.intuit.com/experiences/rtb-pods/images/icon-accurate-retina.0b077842.png"			
		},{
			question: "What the year is it?",
			answer: "",
			imgSrc : "https://turbotax.intuit.com/experiences/rtb-pods/images/icon-audit-support-retina.a68b2663.png"				
		}
	];
	$scope.loaded = true;
	$scope.questions = questions;	

	function incrementQuestion() {
		$scope.iterator++;
	}

	function decrementQuestion() {
		$scope.iterator--;
	}

	function submit() {

	}
}