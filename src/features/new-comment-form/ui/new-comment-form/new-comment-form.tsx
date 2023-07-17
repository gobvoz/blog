import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';

import { DynamicModuleLoader, ReducerList } from 'shared/libs/components/dynamic-module-loader';
import { useAppDispatch, useAppTranslation } from 'shared/libs/hooks';
import { Input } from 'shared/ui/input';
import { Button } from 'shared/ui/button';
import { classNames } from 'shared/libs/class-names';

import cls from './new-comment-form.module.scss';

import {
  newCommentFormActions,
  newCommentFormReducer,
} from '../../model/slice/new-comment-form-slice';
import { selectNewCommentFormText } from '../../model/selectors/select-new-comment-form-text';
import { selectNewCommentFormError } from '../../model/selectors/select-new-comment-form-error';
import { selectNewCommentFormLoading } from '../../model/selectors/select-new-comment-form-loading';

interface Props {
  className?: string;
  onSendComment: (text: string) => void;
}

const reducerList: ReducerList = {
  newCommentForm: newCommentFormReducer,
};

const NewCommentForm = memo((props: Props) => {
  const { className, onSendComment } = props;
  const dispatch = useAppDispatch();
  const { setText } = newCommentFormActions;

  const { t } = useAppTranslation('new-comment-form');

  const newComment = useSelector(selectNewCommentFormText);
  const error = useSelector(selectNewCommentFormError);
  const isLoading = useSelector(selectNewCommentFormLoading);

  const handleTextChange = useCallback(
    (value: string) => {
      dispatch(setText(value));
    },
    [dispatch],
  );

  const handleSubmit = useCallback(
    (evt: React.FormEvent) => {
      evt.preventDefault();

      if (newComment) {
        onSendComment(newComment);
        dispatch(setText(''));
      }
    },
    [dispatch, onSendComment, newComment],
  );

  return (
    <DynamicModuleLoader reducerList={reducerList}>
      <div className={classNames(cls.wrapper, className)}>
        <form className={cls.commentForm} onSubmit={handleSubmit}>
          <Input
            id="comment-text"
            placeholder={t('comment-placeholder', { ns: 'new-comment-form' })}
            value={newComment}
            onChange={handleTextChange}
          />
          <Button className={cls.button} type="submit" primary>
            {t('add-comment', { ns: 'new-comment-form' })}
          </Button>
        </form>
      </div>
    </DynamicModuleLoader>
  );
});

export { NewCommentForm };
