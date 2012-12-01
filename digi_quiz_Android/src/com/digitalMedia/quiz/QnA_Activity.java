package com.digitalMedia.quiz;

import com.digitalMedia.quiz.R;

import android.app.Activity;
import android.app.AlertDialog;
import android.app.Dialog;
import android.content.DialogInterface;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.TextView;

public class QnA_Activity extends Activity implements android.view.View.OnClickListener {

	Dialog dialog;
	@Override
	public void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.activity_game_options);

		// Set up click listeners for buttons

		View newButton = findViewById(R.id.new_button);
		newButton.setOnClickListener(this);

		View aboutButton =  findViewById(R.id.about_button);
		aboutButton.setOnClickListener(this);

		View exitButton = findViewById(R.id.exit_button);
		exitButton.setOnClickListener(this);
	}

	public void onClick(View v) {
		switch (v.getId()) {
		case R.id.new_button:
			chooseDfficultyNewGameDialog();
			break;

		case R.id.about_button:
			aboutQuizGameDialog();
			break;

		case R.id.exit_button:
			finish();
			break;

		case R.id.about_ok_button:
			dialog.dismiss();
			break;

		default:
			break;
		}
	}

	// This method displays Dialog box when About button is clicked.

	private void aboutQuizGameDialog() {
		dialog = new Dialog(this);
		dialog.setContentView(R.layout.about_dialog);
		dialog.setTitle("About Digital Media Quiz");

		TextView aboutText = (TextView) dialog.findViewById(R.id.about_text);
		aboutText.setText(R.string.about_quiz_game);

		View dialogOKButton = dialog.findViewById(R.id.about_ok_button);

		dialogOKButton.setOnClickListener(this);
		dialog.show();
	}
	//This method displays Dialog box for selecting subject of a New game.

	private void chooseDfficultyNewGameDialog() {
		new AlertDialog.Builder(this)
		.setTitle(R.string.subject_label)
		.setItems(R.array.game_subject_array, 
				new DialogInterface.OnClickListener() {

			public void onClick(DialogInterface dialog, int i) {
				startQuizGame(i);
			}
		})
		.show();
	}

	//Start a new game with the selected subject	
	private void startQuizGame(int subject) {
		Intent gameIntent = new Intent(QnA_Activity.this, QuizGameActivity.class);
		gameIntent.putExtra(QuizGameActivity.SUBJECT, subject);
		startActivity(gameIntent);
	}
}

