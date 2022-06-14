// components
import Wrapper from 'components/header/Wrapper'
import Layout, { AutoLayout } from 'components/header/Layout'
import Logo from 'components/header/Logo'
import ControlBtn from 'components/header/ControlBtn'

const Header = ({
  onNavToggle, 
  onOptionToggle, 
  onLearningToggle
}: Props) => {
  return (
    <Wrapper>
      <Layout>
        <AutoLayout>
          <div>
            <ControlBtn message="Contenu" onClick={onNavToggle} />
            <ControlBtn message="Paramètres" onClick={onOptionToggle} />
            <ControlBtn message="points saillants" onClick={onLearningToggle} />
          </div>
        </AutoLayout>
      </Layout>
    </Wrapper>
  );
}

interface Props {
  onNavToggle: (value?: boolean) => void;
  onOptionToggle: (value?: boolean) => void;
  onLearningToggle: (value?: boolean) => void;
}

export default Header