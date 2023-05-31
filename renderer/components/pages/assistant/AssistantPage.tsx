import { useState } from 'react';

import withAuth from 'lib/auth/withAuth';
import withAuthSecurity from 'lib/auth/withAuthSecurity';
import withGetDataFromTree from 'lib/apollo/withGetDataFromTree';

import { TNextPage } from 'lib/apollo/types';

import DropdownMenu from 'components/shared/molecules/DropdownMenu';
import PageHeader from 'components/shared/molecules/PageHeader';
import DefaultTemplate from 'components/shared/templates/DefaultTemplate';

import { Content, Wrapper } from './styled';

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
    // eslint-disable-next-line no-console
    // console.log('Selected Tone of voice index:', selectedIndex);
  };

  const handleSpeechStyleSelect = (selectedIndex: number | null) => {
    setSelectedSpeechStyleIndex(selectedIndex);
    // eslint-disable-next-line no-console
    // console.log('Selected Speech style index:', selectedIndex);
  };

  return (
    <DefaultTemplate testId="assistant-page">
      <Wrapper>
        <PageHeader title="AI Assistant">
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
        </PageHeader>
        <Content>AI Assistant page content</Content>
      </Wrapper>
    </DefaultTemplate>
  );
};

export default withGetDataFromTree(withAuth(withAuthSecurity(AssistantPage)));
