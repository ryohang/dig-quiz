package com.digitalMedia.quiz;

import java.util.ArrayList;
import java.util.List;

import com.digitalMedia.quiz.R;

import android.app.Activity;
import android.app.Dialog;
import android.os.Bundle;
import android.os.Handler;
import android.view.View;
import android.view.View.OnClickListener;
import android.view.Window;
import android.widget.Button;
import android.widget.RadioButton;
import android.widget.RadioGroup;
import android.widget.RadioGroup.OnCheckedChangeListener;
import android.widget.TextView;
import android.widget.ViewFlipper;

public class QuizGameActivity extends  Activity{

	RadioGroup answerRadioGroup;
	int currentQuestion = 0;
	TextView questionTextView;
	Button submitButton;
	Button exitButton;
	ViewFlipper viewFlipper;
	List<QnA> quiz = new ArrayList<QnA>();

	public static final String SUBJECT = "quizSubject";
	public static int DELAY_ANSWER_DIALOG = 777;

	@Override
	public void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.activity_quiz_game);

		questionTextView = (TextView) findViewById(R.id.question_text);
		answerRadioGroup = (RadioGroup) findViewById(R.id.answer_options);
		submitButton = (Button) findViewById(R.id.submit_button);
		exitButton = (Button) findViewById(R.id.exit_button);
		answerRadioGroup.setOnCheckedChangeListener(new OnCheckedChangeListener() {
			// Enable and Disable submit button based on answer clicked
			public void onCheckedChanged(RadioGroup group, int checkedId) {
				if (checkedId > -1) {
					submitButton.setEnabled(true);
					QnA qna = quiz.get(currentQuestion); 
					qna.selectedAnswer = ((RadioButton)group.findViewById(checkedId)).getText().toString();
					qna.selectedId = checkedId;
				} else {
					submitButton.setEnabled(false);
				}	
			}
		});

		final QnA ques = new QnA();
		int game_level = getIntent().getExtras().getInt(SUBJECT);

		quiz = ques.getQuestionByGameLevel(game_level);
		fillInQuestion();

		exitButton.setOnClickListener(new OnClickListener() {

			public void onClick(View v) {
				View exitButton = findViewById(R.id.exit_button);
				exitButton.setOnClickListener(this);
				finish();
			}

		});

		submitButton.setOnClickListener(new OnClickListener() {

			public void onClick(View v) {
				final QnA qna = quiz.get(currentQuestion);
				boolean correctFlag = false; 
				if (qna.isCorrect()) {
					correctFlag = true;
					correctAnswerDialog();					
				} else {
					incorrectAnswerDialog();
				}
				if (correctFlag) {
					new Handler().postDelayed(new Runnable() {

						public void run() {
							if (currentQuestion < (quiz.size() - 1)) {
								currentQuestion++;
								fillInQuestion();
							} else {
								thanks();
							}	
						}
					}, DELAY_ANSWER_DIALOG);
				}
			}
		});        
	}

	// Pause the activity
	public void onPause() {
		super.onPause();
	}

	// Resuming the activity
	public void onResume() {
		super.onResume();
	}

	private void fillInQuestion() {
		QnA qna = quiz.get(currentQuestion);
		questionTextView.setText(qna.question);

		// Set all of the answers in the RadioButtons 
		int count = answerRadioGroup.getChildCount();
		for(int i = 0; i < count; i++)
			((RadioButton) answerRadioGroup.getChildAt(i)).setText(qna.allAnswers.get(i));

		// Restore selected answer if exists otherwise clear previous question's choice
		if(qna.selectedId > -1)
			answerRadioGroup.check(qna.selectedId);
		else 
			answerRadioGroup.clearCheck();
	}

	private void correctAnswerDialog() {
		final Dialog correctAnswerDialog = new Dialog(this);
		correctAnswerDialog.getWindow();
		correctAnswerDialog.requestWindowFeature(Window.FEATURE_NO_TITLE);
		correctAnswerDialog.setContentView(R.layout.correct_answer_dialog);
		correctAnswerDialog.setCanceledOnTouchOutside(false);
		new Handler().postDelayed(new Runnable() {			
			public void run() {
				correctAnswerDialog.dismiss();
			}
		}, DELAY_ANSWER_DIALOG);
		correctAnswerDialog.show();
	}

	private void incorrectAnswerDialog() {
		final Dialog incorrectAnswerDialog = new Dialog(this);
		incorrectAnswerDialog.getWindow();
		incorrectAnswerDialog.requestWindowFeature(Window.FEATURE_NO_TITLE);
		incorrectAnswerDialog.setContentView(R.layout.incorrect_answer_dialog);
		incorrectAnswerDialog.setCanceledOnTouchOutside(false);
		new Handler().postDelayed(new Runnable() {			
			public void run() {
				incorrectAnswerDialog.dismiss();
			}
		}, DELAY_ANSWER_DIALOG);
		incorrectAnswerDialog.show(); 	
	}
	private void thanks() {
		final Dialog thanks = new Dialog(this);
		thanks.getWindow();
		thanks.requestWindowFeature(Window.FEATURE_NO_TITLE);
		thanks.setContentView(R.layout.thanks);
		thanks.setCanceledOnTouchOutside(false);
		new Handler().postDelayed(new Runnable() {			
			public void run() {
				thanks.dismiss();
			}
		}, DELAY_ANSWER_DIALOG = 1500);
		thanks.show();
	}
}
