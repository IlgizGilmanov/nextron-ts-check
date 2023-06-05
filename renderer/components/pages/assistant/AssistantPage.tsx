import { useState } from 'react';

import withAuth from 'lib/auth/withAuth';
import withAuthSecurity from 'lib/auth/withAuthSecurity';
import withGetDataFromTree from 'lib/apollo/withGetDataFromTree';

import { TNextPage } from 'lib/apollo/types';

import Button from 'components/shared/atoms/Button';
import Icon from 'components/shared/atoms/Icon';
import DropdownMenu from 'components/shared/molecules/DropdownMenu';
import PageHeader from 'components/shared/molecules/PageHeader';
import DefaultTemplate from 'components/shared/templates/DefaultTemplate';

import ChatterInput from './components/ChatterInput';

import { ChatName, ChatNameWrapper, Content, Wrapper } from './styled';

const toneOfVoiceItems = [
  'Clinical',
  'Authoritative',
  'Cold',
  'Confident',
  'Cynical',
  'Emotional',
  'Empathetic',
  'Formal',
  'Informal',
  'Friendly',
  'Humorous',
];

const speechStyleItems = [
  'Academic',
  'Analytical',
  'Argumentative',
  'Controversial',
  'Creative',
  'Critical',
  'Descriptive',
  'Informative',
  'Journalistic',
  'Persuasive',
];

export const AssistantPage: TNextPage = () => {
  const [selectedToneOfVoiceIndex, setSelectedToneOfVoiceIndex] = useState<number | null>(0);
  const [selectedSpeechStyleIndex, setSelectedSpeechStyleIndex] = useState<number | null>(0);

  const handleToneOfVoiceSelect = (selectedIndex: number | null) => {
    setSelectedToneOfVoiceIndex(selectedIndex);
  };

  const handleSpeechStyleSelect = (selectedIndex: number | null) => {
    setSelectedSpeechStyleIndex(selectedIndex);
  };

  return (
    <DefaultTemplate testId="assistant-page">
      <Wrapper>
        <PageHeader
          leftControls={
            <ChatNameWrapper>
              <ChatName>Untitled Chat</ChatName>
              <Button
                variant="hollow"
                iconType="only"
                icon={
                  <Icon
                    name="edit-pencil"
                    $color="transparent"
                    $strokeColor="primary_text"
                    $size={24}
                  />
                }
              />
            </ChatNameWrapper>
          }
          rightControls={
            <>
              <DropdownMenu
                defaultLabel="Tone of Voice"
                menuItems={toneOfVoiceItems}
                selectedIndex={selectedToneOfVoiceIndex}
                onSelect={handleToneOfVoiceSelect}
              />
              <DropdownMenu
                defaultLabel="Speech Style"
                menuItems={speechStyleItems}
                selectedIndex={selectedSpeechStyleIndex}
                onSelect={handleSpeechStyleSelect}
              />
            </>
          }
        />
        <Content>
          <ChatterInput />
        </Content>
      </Wrapper>
    </DefaultTemplate>
  );
};

export default withGetDataFromTree(withAuth(withAuthSecurity(AssistantPage)));
